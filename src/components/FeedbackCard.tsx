import { Card, CardContent, Typography } from "@mui/material";

import styles from "./FeedbackCard.module.css";
import { useContext } from "react";
import { DataContext } from "@/app/page";
import { FeedbackData } from "@/types";

const FeedbackCard: React.FC<FeedbackData> = ({ name, score, feedback }) => {
  return (
    <Card className={styles.card}>
      <CardContent>
        <Typography gutterBottom>{name}</Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          Score: {score}
        </Typography>
        <Typography variant="body2">"{feedback}"</Typography>
      </CardContent>
    </Card>
  );
};

export default FeedbackCard;
