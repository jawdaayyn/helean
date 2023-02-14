import { Pie, Cell, PieChart, Label } from "recharts";
import styles from "./Chart.module.css";
const Chart = ({ R }: any) => {
  R < 1 ? (R *= 100) : console.log("cc");
  const data = [{ value: R }, { value: 100 - R }, { value: 1 }];
  return (
    <PieChart width={80} height={100}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        dataKey="value"
        innerRadius={25}
        outerRadius={32}
      >
        {data.map((entry, index) => {
          if (index === 1 || index === 2) {
            return <Cell key={`cell-${index}`} fill="#f3f6f9" />;
          }
          return <Cell key={`cell-${index}`} fill="green" />;
        })}
        <Label
          value={data[0].value + "%"}
          position="center"
          fill="blue"
          className={styles.label}
        />
      </Pie>
    </PieChart>
  );
};

export default Chart;
