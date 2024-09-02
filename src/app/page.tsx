"use client";

import Container from "@mui/material/Container";
import { Box, Card, CircularProgress, Paper, Typography } from "@mui/material";
import mockData from "../data/data.json";

import styles from "./page.module.css";
import ScoreChart from "@/components/ScoreChart";
import FeedbackCard from "@/components/FeedbackCard";
import { createContext, useEffect, useState } from "react";
import {
  DataContextType,
  FeedbackData,
  FetchResponse,
  MockResponse,
} from "@/types";
import mockFetch from "@/api";

export const DataContext = createContext<DataContextType | undefined>(
  undefined
);

export default function Home() {
  const [data, setData] = useState<FeedbackData[] | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    mockFetch("/api/data")
      .then((response) => {
        if ((response as MockResponse).status === 200) {
          return (response as MockResponse).json() as Promise<FetchResponse>;
        } else {
          throw new Error("Failed to fetch");
        }
      })
      .then((result) => {
        console.log(result.data);
        setData(result.data.feedback);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <Container maxWidth="lg" className={styles.loader}>
        <CircularProgress />
      </Container>
    );
  }

  if (error || !data || data.length === 0) {
    return (
      <Container maxWidth="lg" className={styles.container}>
        <Paper className={styles.error}>Sorry, something went wrong</Paper>
      </Container>
    );
  }

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
          <Box className={styles["chart-wrapper"]}>
            <ScoreChart />
          </Box>
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
