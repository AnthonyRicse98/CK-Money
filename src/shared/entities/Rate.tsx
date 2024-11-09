export interface IRateData {
  base: string;
  disclaimer: string;
  license: string;
  rates : IRate
}

export interface IRate { [key: string]: number };


