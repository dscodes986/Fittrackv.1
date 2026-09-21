import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card } from '../../components/ui/Card';
import { colors, spacing, typography } from '../../constants/theme';

export default function WorkoutsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Workout Templates</Text>

      <View style={styles.templateList}>
        <Card style={styles.templateCard}>
          <Text style={styles.templateName}>Push Day</Text>
          <Text style={styles.templateInfo}>5 exercises • Chest, Shoulders, Triceps</Text>
        </Card>

        <Card style={styles.templateCard}>
          <Text style={styles.templateName}>Pull Day</Text>
          <Text style={styles.templateInfo}>5 exercises • Back, Biceps</Text>
        </Card>

        <Card style={styles.templateCard}>
          <Text style={styles.templateName}>Leg Day</Text>
          <Text style={styles.templateInfo}>6 exercises • Quads, Hamstrings, Glutes</Text>
        </Card>

        <Card style={styles.templateCard}>
          <Text style={styles.templateName}>Upper Body</Text>
          <Text style={styles.templateInfo}>8 exercises • Chest, Back, Arms</Text>
        </Card>

        <Card style={styles.addCard}>
          <Text style={styles.addText}>+ Create Template</Text>
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
  templateInfo: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  addCard: {
    borderWidth: 2,
    borderColor: colors.primary,
    borderStyle: 'dashed',
    alignItems: 'center',
    paddingVertical: spacing.lg,
  },
  addText: {
    ...typography.body,
    color: colors.primary,
    fontWeight: '600',
  },
});
