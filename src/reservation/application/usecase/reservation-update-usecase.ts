import { Inject, Injectable, Logger, NotFoundException } from "@nestjs/common";
import { Constants } from "../../../common/constants";
import { ReservationModel } from "../../domain/model/reservation-model";
import { ReservationRepositoryInterface } from "../../domain/repository/reservation-repository.interface";
import { ReservationUpdateUseCaseInterface } from "../port/reservation-update-usecase.interface";

@Injectable()
export class ReservationUpdateUseCase implements ReservationUpdateUseCaseInterface {

    private readonly logger = new Logger("ReservationUpdateUseCase");

    constructor(
        @Inject('ReservationRepositoryInterface')
        private readonly reservationRepositoryInterface: ReservationRepositoryInterface
      ) {}

    async execute(reservationModel: ReservationModel, id: string): Promise<ReservationModel>{
        const reservationExists = await this.reservationRepositoryInterface.getById(id);
        if (!reservationExists){
            throw new NotFoundException(Constants.hotelNotFound);
        }
        reservationModel.id = id;
        return await this.reservationRepositoryInterface.update(reservationModel);
    }
}