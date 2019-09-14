import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '.';
import { PasswordHelper } from '../helpers';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly passwordHelper: PasswordHelper,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findOneByEmail(email);

    if (
      !user ||
      !(await this.passwordHelper.compareHash(password, user.password))
    ) {
      return null;
    }

    const payload = { userId: user.id, email: user.email };

    return { access_token: this.jwtService.sign(payload) };
  }
}
