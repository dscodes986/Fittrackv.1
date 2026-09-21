import { useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

export function useFocusCallback(callback: () => void | Promise<void>) {
  useFocusEffect(
    useCallback(() => {
      callback();
    }, [callback]),
  );
}
