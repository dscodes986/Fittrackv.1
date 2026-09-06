import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Seed default exercises
  const exercises = [
    // Chest
    {
      name: 'Bench Press',
      description: 'Barbell bench press on flat bench',
      muscleGroup: 'CHEST',
      secondaryMuscles: JSON.stringify(['Triceps', 'Shoulders']),
      equipment: 'BARBELL',
      difficulty: 'INTERMEDIATE',
      instructions: 'Lie on flat bench, grip bar slightly wider than shoulders, lower to chest, press up.',
    },
    {
      name: 'Incline Dumbbell Press',
      description: 'Dumbbell press on incline bench',
      muscleGroup: 'CHEST',
      secondaryMuscles: JSON.stringify(['Shoulders', 'Triceps']),
      equipment: 'DUMBBELL',
      difficulty: 'INTERMEDIATE',
    },
    {
      name: 'Cable Fly',
      description: 'Cable chest fly',
      muscleGroup: 'CHEST',
      secondaryMuscles: JSON.stringify([]),
      equipment: 'CABLE',
      difficulty: 'BEGINNER',
    },
    {
      name: 'Push Up',
      description: 'Bodyweight push up',
      muscleGroup: 'CHEST',
      secondaryMuscles: JSON.stringify(['Triceps', 'Shoulders']),
      equipment: 'BODYWEIGHT',
      difficulty: 'BEGINNER',
    },

    // Back
    {
      name: 'Deadlift',
      description: 'Barbell deadlift from floor',
      muscleGroup: 'BACK',
      secondaryMuscles: JSON.stringify(['Glutes', 'Hamstrings', 'Traps']),
      equipment: 'BARBELL',
      difficulty: 'ADVANCED',
    },
    {
      name: 'Pull Up',
      description: 'Overhand grip pull up',
      muscleGroup: 'BACK',
      secondaryMuscles: JSON.stringify(['Biceps']),
      equipment: 'BODYWEIGHT',
      difficulty: 'INTERMEDIATE',
    },
    {
      name: 'Barbell Row',
      description: 'Bent over barbell row',
      muscleGroup: 'BACK',
      secondaryMuscles: JSON.stringify(['Biceps']),
      equipment: 'BARBELL',
      difficulty: 'INTERMEDIATE',
    },
    {
      name: 'Lat Pulldown',
      description: 'Cable lat pulldown',
      muscleGroup: 'BACK',
      secondaryMuscles: JSON.stringify(['Biceps']),
      equipment: 'CABLE',
      difficulty: 'BEGINNER',
    },
    {
      name: 'Seated Cable Row',
      description: 'Seated cable row',
      muscleGroup: 'BACK',
      secondaryMuscles: JSON.stringify(['Biceps']),
      equipment: 'CABLE',
      difficulty: 'BEGINNER',
    },

    // Legs
    {
      name: 'Squat',
      description: 'Barbell back squat',
      muscleGroup: 'LEGS',
      secondaryMuscles: JSON.stringify(['Glutes', 'Core']),
      equipment: 'BARBELL',
      difficulty: 'INTERMEDIATE',
    },
    {
      name: 'Romanian Deadlift',
      description: 'Romanian deadlift focusing on hamstrings',
      muscleGroup: 'LEGS',
      secondaryMuscles: JSON.stringify(['Glutes', 'Back']),
      equipment: 'BARBELL',
      difficulty: 'INTERMEDIATE',
    },
    {
      name: 'Leg Press',
      description: 'Machine leg press',
      muscleGroup: 'LEGS',
      secondaryMuscles: JSON.stringify(['Glutes']),
      equipment: 'MACHINE',
      difficulty: 'BEGINNER',
    },
    {
      name: 'Leg Extension',
      description: 'Machine leg extension',
      muscleGroup: 'LEGS',
      secondaryMuscles: JSON.stringify([]),
      equipment: 'MACHINE',
      difficulty: 'BEGINNER',
    },
    {
      name: 'Leg Curl',
      description: 'Machine leg curl',
      muscleGroup: 'LEGS',
      secondaryMuscles: JSON.stringify([]),
      equipment: 'MACHINE',
      difficulty: 'BEGINNER',
    },

    // Shoulders
    {
      name: 'Shoulder Press',
      description: 'Overhead barbell press',
      muscleGroup: 'SHOULDERS',
      secondaryMuscles: JSON.stringify(['Triceps']),
      equipment: 'BARBELL',
      difficulty: 'INTERMEDIATE',
    },
    {
      name: 'Lateral Raise',
      description: 'Dumbbell lateral raise',
      muscleGroup: 'SHOULDERS',
      secondaryMuscles: JSON.stringify([]),
      equipment: 'DUMBBELL',
      difficulty: 'BEGINNER',
    },

    // Biceps
    {
      name: 'Bicep Curl',
      description: 'Barbell bicep curl',
      muscleGroup: 'BICEPS',
      secondaryMuscles: JSON.stringify([]),
      equipment: 'BARBELL',
      difficulty: 'BEGINNER',
    },
    {
      name: 'Hammer Curl',
      description: 'Dumbbell hammer curl',
      muscleGroup: 'BICEPS',
      secondaryMuscles: JSON.stringify(['Forearms']),
      equipment: 'DUMBBELL',
      difficulty: 'BEGINNER',
    },

    // Triceps
    {
      name: 'Tricep Pushdown',
      description: 'Cable tricep pushdown',
      muscleGroup: 'TRICEPS',
      secondaryMuscles: JSON.stringify([]),
      equipment: 'CABLE',
      difficulty: 'BEGINNER',
    },
    {
      name: 'Skull Crusher',
      description: 'Lying tricep extension',
      muscleGroup: 'TRICEPS',
      secondaryMuscles: JSON.stringify([]),
      equipment: 'BARBELL',
      difficulty: 'INTERMEDIATE',
    },

    // Abs
    {
      name: 'Plank',
      description: 'Forearm plank hold',
      muscleGroup: 'ABS',
      secondaryMuscles: JSON.stringify(['Core']),
      equipment: 'BODYWEIGHT',
      difficulty: 'BEGINNER',
    },
  ];

  for (const exercise of exercises) {
    const existing = await prisma.exercise.findFirst({
      where: {
        name: exercise.name,
        createdById: null,
      },
    });

    if (!existing) {
      await prisma.exercise.create({
        data: exercise,
      });
    }
  }

  console.log('✅ Seeded', exercises.length, 'exercises');
  console.log('🎉 Database seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
