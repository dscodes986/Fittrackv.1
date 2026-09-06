import { Controller, Get, Patch, Body, UseGuards, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateSettingsDto } from './dto/update-settings.dto';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('me')
  async getProfile(@CurrentUser() user: any) {
    return this.usersService.findById(user.id);
  }

  @Patch('me')
  async updateProfile(@CurrentUser() user: any, @Body() updateUserDto: UpdateUserDto) {
    const { passwordHash, ...data } = updateUserDto as any;
    return this.usersService.update(user.id, data);
  }

  @Get('me/settings')
  async getSettings(@CurrentUser() user: any) {
    return this.usersService.getSettings(user.id);
  }

  @Patch('me/settings')
  async updateSettings(@CurrentUser() user: any, @Body() updateSettingsDto: UpdateSettingsDto) {
    return this.usersService.updateSettings(user.id, updateSettingsDto);
  }

  @Delete('me')
  async deleteAccount(@CurrentUser() user: any) {
    await this.usersService.delete(user.id);
    return { message: 'Account deleted successfully' };
  }
}
