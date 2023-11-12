// src/auth/auth.controller.ts
import { Controller, Post, Body, UseGuards, UnauthorizedException } from "@nestjs/common";
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { LoginDto } from "./loginDto";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const user = await this.authService.validateUser(loginDto.email, loginDto.senha);
    if (!user) {
      throw new UnauthorizedException();
    }
    return this.authService.login(user);
  }
}
