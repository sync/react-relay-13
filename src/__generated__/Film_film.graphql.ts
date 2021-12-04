/**
 * @generated SignedSource<<1cd60c852ac84827db3744de8b426042>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Film_film$data = {
  readonly id: string;
  readonly title: string | null;
  readonly " $fragmentType": "Film_film";
};
export type Film_film$key = {
  readonly " $data"?: Film_film$data;
  readonly " $fragmentSpreads": FragmentRefs<"Film_film">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Film_film",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    }
  ],
  "type": "Film",
  "abstractKey": null
};

(node as any).hash = "7d67c2a1aa2a816895950dfa965fd804";

export default node;
