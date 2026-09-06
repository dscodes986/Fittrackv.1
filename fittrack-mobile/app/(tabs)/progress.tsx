import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card } from '../../components/ui/Card';
import { colors, spacing, typography } from '../../constants/theme';

export default function ProgressScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Progress</Text>

      <View style={styles.statsRow}>
        <Card style={styles.statCard}>
          <Text style={styles.statValue}>24</Text>
          <Text style={styles.statLabel}>Total Workouts</Text>
        </Card>
        <Card style={styles.statCard}>
          <Text style={styles.statValue}>52</Text>
          <Text style={styles.statLabel}>PRs</Text>
        </Card>
      </View>

      <Text style={styles.sectionTitle}>Strength Progress</Text>
      <Card style={styles.chartCard}>
        <View style={styles.chartPlaceholder}>
          <Text style={styles.chartPlaceholderText}>Chart will appear here</Text>
          <Text style={styles.chartPlaceholderSubtext}>Bench Press: 50kg → 80kg</Text>
        </View>
      </Card>

      <Text style={styles.sectionTitle}>Training Volume</Text>
      <Card style={styles.chartCard}>
        <View style={styles.chartPlaceholder}>
          <Text style={styles.chartPlaceholderText}>Volume Chart</Text>
          <Text style={styles.chartPlaceholderSubtext}>Last 30 days: 125,000 kg</Text>
        </View>
      </Card>

      <Text style={styles.sectionTitle}>Recent PRs</Text>
      <Card style={styles.prCard}>
        <Text style={styles.prExercise}>Bench Press</Text>
        <Text style={styles.prValue}>80 kg × 5 reps</Text>
        <Text style={styles.prDate}>Aug 28, 2026</Text>
      </Card>
      <Card style={styles.prCard}>
        <Text style={styles.prExercise}>Squat</Text>
        <Text style={styles.prValue}>100 kg × 8 reps</Text>
        <Text style={styles.prDate}>Aug 26, 2026</Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xxl,
    paddingBottom: spacing.xxl,
  },
  title: {
    ...typography.h2,
    color: colors.text,
    marginBottom: spacing.xl,
  },
  statsRow: {
    flexDirection: 'row',
    gap: spacing.md,
    marginBottom: spacing.xl,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    ...typography.h2,
    color: colors.primary,
    marginBottom: spacing.xs,
  },
  statLabel: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.text,
    marginBottom: spacing.md,
  },
  chartCard: {
    marginBottom: spacing.xl,
  },
  chartPlaceholder: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartPlaceholderText: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },
  chartPlaceholderSubtext: {
    ...typography.caption,
    color: colors.textTertiary,
  },
  prCard: {
    marginBottom: spacing.md,
  },
  prExercise: {
    ...typography.body,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },
  prValue: {
    ...typography.h3,
    color: colors.success,
    marginBottom: spacing.xs,
  },
  prDate: {
    ...typography.caption,
    color: colors.textSecondary,
  },
});
