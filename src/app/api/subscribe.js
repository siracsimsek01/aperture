export default function handler(req, res) {
    if (req.method === 'POST') {
        // handle POST request
        const { email } = req.body;
        res.status(200).json({ message: "Email saved."})
    } else {
        res.status(405).json({ message: "Method not allowed. "})
    }
}