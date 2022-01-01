import { Controller, Response, Param, Get, HttpStatus } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('SongRequest')
@Controller('/api/songrequest')
export class SongRequestController {

    constructor(
    ){}

    @Get("/SongQueue")
    getAuth(@Response() res) {
        res.status(HttpStatus.OK).json({message: "a test"})
    }
}