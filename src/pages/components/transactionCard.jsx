import { Card, CardContent, Typography } from '@mui/material';
import { BarChart, Bar, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const TransactionCard = ({ title, value, chartType, data, color }) => {
  return (
    <Card style={{ backgroundColor: color, borderRadius: '10px', padding: '10px', height: '150px' }}>
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {title}
        </Typography>
        <Typography variant="h6" component="h4">
          {value}
        </Typography>
        <div style={{ width: '100%', height: 80 }}>
          <ResponsiveContainer>
            {chartType === 'bar' ? (
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#39539E" />
              </BarChart>
            ) : (
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#39539E" />
              </LineChart>
            )}
          </ResponsiveContainer>
        </div>
        <Typography variant="caption" color="textSecondary">
          Jan 01 - Jan 10
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TransactionCard;
