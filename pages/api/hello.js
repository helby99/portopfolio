// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs"
import path from "path"
export default function handler(req, res) {
  const lokasi = path.join(__dirname+"../../../../../databasse");
  const Datajson = fs.readFileSync(`${lokasi}/Data.json`,{encording:"utf-8"});
  res.status(200).json({ Datajson: JSON.parse(Datajson)});
}
