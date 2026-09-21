import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { colors, spacing, typography, borderRadius } from '../constants/theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  style?: any;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  style,
}) => {
  const getStyle = () => {
    const base = styles.button;
    const variantStyle =
      variant === 'primary'
        ? styles.primary
        : variant === 'secondary'
          ? styles.secondary
          : styles.outline;
    const sizeStyle =
      size === 'small'
        ? styles.small
        : size === 'large'
          ? styles.large
          : styles.medium;

    return [base, variantStyle, sizeStyle, disabled && styles.disabled, style];
  };

  const getTextStyle = () => {
    const base = styles.text;
    const variantStyle =
      variant === 'primary'
        ? styles.textPrimary
        : variant === 'secondary'
          ? styles.textSecondary
          : styles.textOutline;

    return [base, variantStyle];
  };

  return (
    <TouchableOpacity
      style={getStyle()}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? colors.white : colors.primary} />
      ) : (
        <Text style={getTextStyle()}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  small: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  medium: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  large: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.surfaceLight,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.primary,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
  },
  textPrimary: {
    color: colors.white,
  },
  textSecondary: {
    color: colors.text,
  },
  textOutline: {
    color: colors.primary,
  },
});
