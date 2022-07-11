export default function handler(req, res) {
  let response = { startDate: 'June 10, 2022' };

  response.index = 8;

  return res.json(response);
}
