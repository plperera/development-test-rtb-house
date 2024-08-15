
import sellersService from "@/services/sellersService";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getAllSellers(req: Request, res: Response) {
  try {

    const allSellers = await sellersService.getAllSellers();
  
    return res.send(allSellers).status(httpStatus.OK);

  } catch (error) {
    console.log(error);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
export async function getSellers(req: Request, res: Response) {
  try {

    const { amount = 10 } = req.query
    
    if (isNaN(Number(amount))) {
      return res.sendStatus(httpStatus.BAD_REQUEST);
    }
  
    const allSellers = await sellersService.getSellers(Number(amount));

    return res.send(allSellers).status(httpStatus.OK);

  } catch (error) {
    console.log(error);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
export async function getSellerById(req: Request, res: Response) {
  try {

    const { sellerId } = req.params
    
    if (isNaN(Number(sellerId))) {
      return res.sendStatus(httpStatus.BAD_REQUEST);
    }
  
    const uniqueSeller = await sellersService.getSellerById(Number(sellerId));

    if(!uniqueSeller){
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
    
    return res.send(uniqueSeller).status(httpStatus.OK);

  } catch (error) {
    console.log(error);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
