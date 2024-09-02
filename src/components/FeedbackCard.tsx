import { Card, CardContent, Typography } from "@mui/material";

import styles from "./FeedbackCard.module.css";

const FeedbackCard = ({ data }) => {
  return (
    <Card className={styles.card}>
      <CardContent>
        <Typography gutterBottom>{data.name}</Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          Score: {data.score}
        </Typography>
        <Typography variant="body2">"{data.feedback}"</Typography>
      </CardContent>
    </Card>
  );
};

export default FeedbackCard;
