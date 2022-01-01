import { Module } from "@nestjs/common";
import { SongRequestController } from "./song-request.contoller";

@Module({
    imports: [],
    controllers: [SongRequestController],
    providers: []
})
export class SongRequestModule {
}