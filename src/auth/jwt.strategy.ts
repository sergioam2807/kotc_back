
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import * as jwksRsa from 'jwks-rsa';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      secretOrKeyProvider: jwksRsa.passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
      }),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      audience: process.env.AUTH0_AUDIENCE,
      issuer: `https://${process.env.AUTH0_DOMAIN}/`,
      ignoreExpiration: false,
      algorithms: ['RS256'],
    });
  }

  async validate(payload: any) {
    console.log('JWT payload:', payload);
    await this.userService.upsertUserFromJwt({
      email: payload.email,
      name: payload.name,
      auth0Id: payload.sub,
      picture: payload.picture,
    });
    return payload;
  }
}
