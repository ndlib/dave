import type { ManifestObject, ManifestStateObject } from '../interfaces/manifest.js'
import jsonClean from './jsonClean.js'
import { Action } from 'redux'
import { manifestBaseUrl } from '../../../configuration/variables.js'

// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_MANIFEST = 'REQUEST_MANIFEST'
export const RECIEVE_MANIFEST = 'RECIEVE_MANIFEST'

// ------------------------------------
// Actions
// ------------------------------------

export function requestManifest (): Action {
  return {
    type: REQUEST_MANIFEST
  }
}

export function recieveManifest (value: string): Action {
  return {
    type: RECIEVE_MANIFEST,
    payload: value
  }
}

export const fetchManifest = (manifestId): Function => {
  const baseUrl = manifestBaseUrl

  let manifestUrl = baseUrl + manifestId + '.json'
  return (dispatch: Function): Promise => {
    dispatch(requestManifest())
    return fetch(manifestUrl)
      .then(data => data.text())
      .then(text => dispatch(recieveManifest(text)))
  }
}

export const actions = {
  requestManifest,
  recieveManifest,
  fetchManifest
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const MANIFEST_ACTION_HANDLERS = {
  [REQUEST_MANIFEST]: (state: ManifestStateObject): ManifestStateObject => {
    return ({ ...state, fetching: true })
  },
  [RECIEVE_MANIFEST]: (state: ManifestStateObject, action: {payload: ManifestObject}): ManifestStateObject => {
    return ({ ...state, data: jsonClean(action.payload), fetching: false })
  }
}

// ------------------------------------
// Reducers
// ------------------------------------
const initialState: ManifestStateObject = { fetching: false, data: null }
export default function manifestReducer (
  state: ManifestStateObject = initialState, action: Action):
   ManifestStateObject {
  const handler = MANIFEST_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
