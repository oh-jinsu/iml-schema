export type IML = {
  ch: number;
  outerWalls: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    thickness: number;
    height: number;
  }[];
  rooms: {
    id: string;
    name: string;
    walls: string[];
    points: { x: number; y: number }[];
  }[];
  innerWalls: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    thickness: number;
    height: number;
  }[];
  doors: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    hingeSide: "left" | "right";
    swingDirection: "in" | "out";
    target: "innerWall" | "outerWall";
  }[];
};
