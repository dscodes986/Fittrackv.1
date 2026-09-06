import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data,
    });
  }

  async findById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        settings: true,
        goals: true,
      },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async update(id: string, data: Prisma.UserUpdateInput) {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }

  async getSettings(userId: string) {
    let settings = await this.prisma.userSettings.findUnique({
      where: { userId },
    });

    // Create default settings if they don't exist
    if (!settings) {
      settings = await this.prisma.userSettings.create({
        data: {
          userId,
        },
      });
    }

    return settings;
  }

  async updateSettings(
    userId: string,
    data: Prisma.UserSettingsUpdateInput,
  ) {
    return this.prisma.userSettings.upsert({
      where: { userId },
      update: data,
      create: {
        user: {
          connect: {
            id: userId,
          },
        },
        ...(data.units && {
          units:
            typeof data.units === 'string'
              ? data.units
              : undefined,
        }),
        ...(data.theme && {
          theme:
            typeof data.theme === 'string'
              ? data.theme
              : undefined,
        }),
        ...(data.notificationsEnabled && {
          notificationsEnabled:
            typeof data.notificationsEnabled === 'boolean'
              ? data.notificationsEnabled
              : undefined,
        }),
        ...(data.language && {
          language:
            typeof data.language === 'string'
              ? data.language
              : undefined,
        }),
      },
    });
  }
}