import { ICRUD } from "src/utils/ICRUD";
import { PatientResponseDTO } from "../dto/patient-response.dto";
import { PatientDTO } from "../dto/patient.dto";

export interface PatientInterface extends ICRUD<PatientDTO,  PatientResponseDTO>{
    
}