import { connectToDatabase } from "../../utils/mongodb";
import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt"; // Odkomentuj jeśli używasz hashowania

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { username, password } = req.body || {};
  if (!username || !password) {
    return res.status(400).json({ message: "Uzupełnij login i hasło." });
  }

  try {
    const { db } = await connectToDatabase();

    // 🔧 Użycie bazy 'wdzdata' i kolekcji 'admin1'
    const user = await db.collection("admin1").findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Nieprawidłowy login lub hasło." });
    }

    let isMatch;
    if (user.passwordHash) {
      // isMatch = await bcrypt.compare(password, user.passwordHash); // jeżeli hashowane
      isMatch = false; // zakomentuj lub obsłuż, jeśli hasła są hashowane
    } else {
      isMatch = user.password === password;
    }

    if (!isMatch) {
      return res.status(401).json({ message: "Nieprawidłowy login lub hasło." });
    }

    const token = jwt.sign(
      { role: "admin", username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.setHeader(
      "Set-Cookie",
      `authToken=${token}; HttpOnly; Path=/; SameSite=Strict; Max-Age=${2 * 60 * 60}` +
        (process.env.NODE_ENV === "production" ? "; Secure" : "")
    );

    return res.status(200).json({ message: "Zalogowano pomyślnie." });
  } catch (error) {
    console.error("Błąd w /api/login:", error);
    return res.status(500).json({ message: "Wewnętrzny błąd serwera." });
  }
}
