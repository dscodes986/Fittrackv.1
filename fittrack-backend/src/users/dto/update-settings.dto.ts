import { IsOptional, IsEnum, IsBoolean, IsString } from 'class-validator';

enum UnitSystem {
  METRIC = 'METRIC',
  IMPERIAL = 'IMPERIAL',
}

enum Theme {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
  SYSTEM = 'SYSTEM',
}

export class UpdateSettingsDto {
  @IsOptional()
  @IsEnum(UnitSystem)
  units?: UnitSystem;

  @IsOptional()
  @IsEnum(Theme)
  theme?: Theme;

  @IsOptional()
  @IsBoolean()
  notificationsEnabled?: boolean;

  @IsOptional()
  @IsString()
  language?: string;
}
