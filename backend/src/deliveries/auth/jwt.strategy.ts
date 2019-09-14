import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import constant from '../../constant';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: constant.jwtSecret,
    });
  }

  async validate(payload: any): Promise<{ userId: number; email: string }> {
    return {
      userId: payload.userId,
      email: payload.email,
    };
  }
}
