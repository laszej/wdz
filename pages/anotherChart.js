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
    { name: 'Bartosz Werner', głosy: 304, id: 'red' },
    { name: 'Maria Kruk', głosy: 289, id: 'blue' }, // ZMIANA
    { name: 'Sandra Kasprzak', głosy: 254, id: 'red' },
    { name: 'Emil Witczak', głosy: 114, id: 'blue' },
    { name: 'Stanisław Laskowski', głosy: 113, id: 'blue' },
    { name: 'Rafał Walkowiak', głosy: 107, id: 'blue' },
  ];

  const data1 = [
    { name: 'Mateusz Otta', głosy: 509, id: 'blue' },
    { name: 'Paweł Lewandowski', głosy: 427, id: 'blue' },
    { name: 'Małgorzata Wielgosz', głosy: 423, id: 'blue' },
    { name: 'Urszula Sobkowiak', głosy: 395, id: 'blue' },
    { name: 'Jacek Paluszkiewicz', głosy: 377, id: 'blue' },
    { name: 'Łukasz Werner', głosy: 356, id: 'red' },
    { name: 'Sylwia Zawieruszyńska', głosy: 307, id: 'red' },
    { name: 'Maria Borowska', głosy: 301, id: 'red' },
  ];

  const pieData = [
    { name: 'pozostali', value: 6, color: 'red' }, // ZMIANA
    { name: 'Wichrowe do Zwycięstwa', value: 9, color: 'blue' }, // ZMIANA
  ];

  return (
    <>
      <h1 style={{ padding: "3rem 1rem", textAlign: "center", marginTop: "2rem" }}>
      Obecna większość grupy WdZ+1
      </h1>
      <div className="charts">
        <div>
          <h3 style={{textAlign: "center"}}>Sumarycznie</h3>
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
        <h3 style={{textAlign: "center"}}>os. Wichrowe Wzgórze</h3>
          <BarChart
            width={400}
            height={400}
            data={data1}
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" interval={0} angle={-45} textAnchor="end" /> {/* ZMIANA */}
            <YAxis />
            <Tooltip />
            <Bar dataKey="głosy" isAnimationActive={false}>
              {data1.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.id === 'red' ? 'red' : 'blue'} />
              ))}
            </Bar>
          </BarChart>
        </div>

        <div>
        <h3 style={{textAlign: "center"}}>os. Zwycięstwa</h3>
          <BarChart
            width={400}
            height={400}
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" interval={0} angle={-45} textAnchor="end" /> {/* ZMIANA */}
            <YAxis />
            <Tooltip />
            <Bar dataKey="głosy" isAnimationActive={false}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.id === 'blue' ? 'blue' : 'red'} />
              ))}
            </Bar>
          </BarChart>
        </div>

        
      </div>
    </>
  );
};

export default chartExample;
