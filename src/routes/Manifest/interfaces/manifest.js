export type ManifestObject = {
  id: number,
  value: string
}

export type ManifestStateObject = {
  fetching: boolean,
  data: <ManifestObject>
}
