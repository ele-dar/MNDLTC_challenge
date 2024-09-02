"use client";

import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";
import mockData from "../data/data.json";

import styles from "./page.module.css";
import ScoreChart from "@/components/ScoreChart";
import FeedbackCard from "@/components/FeedbackCard";
import { createContext, useState } from "react";
import { FeedbackData } from "@/types";

type DataContextType = {
  data: FeedbackData[];
};

export const DataContext = createContext<DataContextType | undefined>(
  undefined
);

export default function Home() {
  const [data, setData] = useState<FeedbackData[]>(mockData.feedback);

  return (
    <DataContext.Provider value={{ data }}>
      <Container maxWidth="lg" className={styles.container}>
        <Typography component="h1" variant="h4">
          Our Psychologists
        </Typography>

        <Box className={styles.section}>
          <Typography component="h2" variant="h6">
            Psychologist ratings
          </Typography>
          <ScoreChart />
        </Box>

        <Box className={styles.section}>
          <Typography component="h2" variant="h6">
            User feedback
          </Typography>
          <Box className={styles["cards-wrapper"]}>
            {data.map((item) => (
              <FeedbackCard {...item} />
            ))}
          </Box>
        </Box>
      </Container>
    </DataContext.Provider>
  );
}
