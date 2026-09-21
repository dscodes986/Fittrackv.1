import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { colors, spacing, typography } from '../../constants/theme';

export default function StartScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Start Workout</Text>

      <Button
        title="Start Empty Workout"
        onPress={() => {}}
        variant="primary"
        size="large"
        style={styles.emptyButton}
      />

      <Text style={styles.sectionTitle}>Or choose a template</Text>

      <View style={styles.templateList}>
        <Card style={styles.templateCard}>
          <Text style={styles.templateName}>Push Day</Text>
          <Text style={styles.templateExercises}>Bench Press, Shoulder Press, Tricep Pushdown...</Text>
        </Card>

        <Card style={styles.templateCard}>
          <Text style={styles.templateName}>Pull Day</Text>
          <Text style={styles.templateExercises}>Deadlift, Pull Ups, Barbell Row...</Text>
        </Card>

        <Card style={styles.templateCard}>
          <Text style={styles.templateName}>Leg Day</Text>
          <Text style={styles.templateExercises}>Squat, Leg Press, Leg Curl...</Text>
        </Card>
      </View>
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
  emptyButton: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },
  templateList: {
    gap: spacing.md,
  },
  templateCard: {
    borderWidth: 1,
    borderColor: colors.border,
  },
  templateName: {
    ...typography.body,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },
  templateExercises: {
    ...typography.caption,
    color: colors.textSecondary,
  },
});
