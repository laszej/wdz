import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  PieChart,
  Pie,
  Legend,
} from 'recharts';

const chartExample = () => {
  const data = [
    { name: 'Marcin Zaremba', głosy: 337, id: 'red' },
    { name: 'Marcin Werner', głosy: 304, id: 'red' },
    { name: 'Maria Kruk', głosy: 289, id: 'red' },
    { name: 'Sandra Kasprzak', głosy: 254, id: 'red' },
    { name: 'Emil Witczak', głosy: 114, id: 'blue' },
    { name: 'Stanisław Laskowski', głosy: 113, id: 'blue' },
    { name: 'Rafał Walkowiak', głosy: 107, id: 'blue' },
  ];

  const data1 = [
    { name: 'Mateusz Otta', głosy: 509, id: 'blue' },
    { name: 'Paweł Lewandowski', głosy: 427, id: 'blue' },
    { name: 'Grażyna Wielgosz', głosy: 423, id: 'blue' },
    { name: 'Urszula Sobkowiak', głosy: 395, id: 'blue' },
    { name: 'Jacek Paluszkiewicz', głosy: 377, id: 'blue' },
    { name: 'Łukasz Werner', głosy: 356, id: 'red' },
    { name: 'Sylwia Zawieruszyńska', głosy: 307, id: 'red' },
    { name: 'Maria Borowska', głosy: 301, id: 'red' },
  ];

  const pieData = [
    { name: 'pozostali', value: 7, color: 'red' },
    { name: 'Wichrowe do Zwycięstwa', value: 8, color: 'blue' },
  ];

  return (
    <>
      <div>
        <h1
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            height: '10rem',
            marginLeft: '2rem',
          }}
        >
          Wyniki wyborów do Rady Osiedla Nowe Winogrady Północ (2024 - 2029 r.)
        </h1>

        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <div>
            <PieChart width={400} height={400}>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
                label
                stroke="white"
                strokeWidth={2}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>

          <div>
            <BarChart
              width={400}
              height={400}
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="głosy" isAnimationActive={false}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.id === 'blue' ? 'blue' : 'red'} />
                ))}
              </Bar>
            </BarChart>
          </div>

          <div>
            <BarChart
              width={400}
              height={400}
              data={data1}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="głosy" isAnimationActive={false}>
                {data1.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.id === 'red' ? 'red' : 'blue'} />
                ))}
              </Bar>
            </BarChart>
          </div>
        </div>
      </div>
    </>
  );
};

export default chartExample;
