import { addComponent } from "bitecs";
import { addObject3DComponent } from "../utils/jsx-entity";
import { AmbientLight, LightTag } from "../bit-components";
import { AmbientLight as AL } from "three";
import { HubsWorld } from "../app";

export type AmbientLightParams = {
  color: string;
  intensity: number;
};

export function inflateAmbientLight(world: HubsWorld, eid: number, params: AmbientLightParams) {
  const light = new AL();
  light.color.set(params.color).convertSRGBToLinear();
  light.intensity = params.intensity;

  addObject3DComponent(world, eid, light);
  addComponent(world, LightTag, eid);
  addComponent(world, AmbientLight, eid);
  return eid;
}
