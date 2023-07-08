import "./chart.css" 
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Line } from 'recharts';

const data = [
  {
    "name": "0",
    "orders": 0,
    "money": "0"
  },
  {
    "name": "Jan",
    "orders": 3490,
    "money": 4300
  },
  {
    "name": "Feb",
    "orders": 3000,
    "money": 1398
  },
  {
    "name": "Mar",
    "orders": 7000,
    "money": 5800
  },
  {
    "name": "Apr",
    "orders": 2780,
    "money": 3908
  },
  {
    "name": "Mai",
    "orders": 1890,
    "money": 4800
  },
  {
    "name": "Jun",
    "orders": 2390,
    "money": 3800
  },
  {
    "name": "Jul",
    "orders": 6490,
    "money": 4300
  },
  {
    "name": "Aug",
    "orders": 5490,
    "money": 7300
  },
 
]

const Chart = ( {aspect, title} ) => {
  return (
    <div className="chart">
      <div className="titleChart"> {title} </div>
      <ResponsiveContainer width="100%" aspect={aspect} >
      <LineChart width={730} height={250} data={data}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="orders" stroke="#8884d8" />
  <Line type="monotone" dataKey="money" stroke="#fd7f6f" />
</LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart