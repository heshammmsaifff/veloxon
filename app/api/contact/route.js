import { NextResponse } from "next/server";

const TELEGRAM_TOKEN = "8607584869:AAFds6FvTOSO8Nqh4h-qIGpSgUF0k21zfd4";
const CHAT_ID = "6187187718";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, company, phone, email, projectType, budget, message } = body;

    const text = `
🔔 *عميل جديد من الموقع*

👤 *الاسم:* ${name}
🏢 *الشركة / النشاط:* ${company}
📞 *الهاتف:* ${phone}
📧 *الإيميل:* ${email}
🛠 *نوع المشروع:* ${projectType}
💰 *الميزانية:* ${budget}
💬 *تفاصيل إضافية:*
${message || "—"}
    `.trim();

    const res = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: "Markdown",
        }),
      },
    );

    if (!res.ok) throw new Error("Telegram API error");

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 },
    );
  }
}
