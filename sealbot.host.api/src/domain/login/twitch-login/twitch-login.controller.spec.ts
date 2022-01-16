import { Test, TestingModule } from '@nestjs/testing';
import { TwitchLoginController } from './twitch-login.controller';

describe('TwitchLoginController', () => {
  let controller: TwitchLoginController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TwitchLoginController],
    }).compile();

    controller = module.get<TwitchLoginController>(TwitchLoginController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
