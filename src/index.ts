export type IML = {
  ch: number;
  outerWalls: {
    ps: [number, number];
    pe: [number, number];
    thickness: number;
    height: number;
  }[];
  innerWalls: {
    ps: [number, number];
    pe: [number, number];
    thickness: number;
    height: number;
  }[];
};
