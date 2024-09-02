"use client";

import * as React from "react";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";
import data from "../data/data.json";

import styles from "./page.module.css";
import ScoreChart from "@/components/ScoreChart";
import FeedbackCard from "@/components/FeedbackCard";

export default function Home() {
  return (
    <Container maxWidth="lg" className={styles.container}>
      <Typography component="h1" variant="h4">
        Our Psychologists
      </Typography>

      <Box className={styles.section}>
        <Typography component="h2" variant="h6">
          Psychologist ratings
        </Typography>
        <ScoreChart data={data.feedback} />
      </Box>

      <Box className={styles.section}>
        <Typography component="h2" variant="h6">
          User feedback
        </Typography>
        <Box className={styles["cards-wrapper"]}>
          {data.feedback?.map((el) => (
            <FeedbackCard data={el} />
          ))}
        </Box>
      </Box>
    </Container>
  );
}
