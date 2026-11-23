/* ==========================================================================
   Chapter 7 — pre-test and post-test items
   Written to the course item-writing rules: options parallel in form and
   length, distractors drawn from real misconceptions, and questions that ask
   the learner to diagnose a response, compute a setting or choose a design.
   Copyright (c) 2026 Jedsada Saijai.
   ========================================================================== */

AMRQuiz.mount('ch07-pre', {
  type: 'pre',
  chapter: 'ch07',
  title: { th: 'แบบทดสอบก่อนเรียน — บทที่ 7', en: 'Pre-test — Chapter 7' },
  intro: {
    th: 'สำรวจความรู้เดิมก่อนเริ่มบทเรียน เน้นการวินิจฉัยจากรูปร่างของกราฟ ไม่มีผลต่อคะแนนเก็บ',
    en: 'A diagnostic of prior knowledge, built around reading the shape of a response. Not graded.'
  },
  questions: [
    {
      q: {
        th: 'ตั้งแถบตายของตัวควบคุม ON–OFF ไว้ที่ 2 °C แต่วัดการแกว่งจริงได้ 3.4 °C สาเหตุที่น่าจะเป็นที่สุดคือข้อใด',
        en: 'An ON–OFF deadband is set to 2 °C, yet the measured swing is 3.4 °C. The likeliest cause is which?'
      },
      options: [
        { th: 'เซนเซอร์อ่านค่าคลาดเคลื่อนไป 1.4 °C จึงทำให้ขอบของแถบตายเลื่อนออกจากที่ตั้งไว้', en: 'The sensor reads 1.4 °C out, shifting the deadband limits away from where they were set' },
        { th: 'ความหน่วงเวลาทำให้ความร้อนยังเดินทางมาถึงต่อหลังตัดฮีตเตอร์ อุณหภูมิจึงเลยขอบไปทั้งสองด้าน', en: 'Dead time lets heat keep arriving after switch-off, so the temperature passes both limits' },
        { th: 'แถบตายที่ตั้งไว้แคบเกินไปสำหรับระบบนี้ ตัวควบคุมจึงขยายแถบให้เองโดยอัตโนมัติ', en: 'The band is too narrow for this system, so the controller widens it automatically' },
        { th: 'อัตราขยายของตัวควบคุมสูงเกินไป ทำให้เอาต์พุตตอบสนองแรงกว่าที่แถบตายกำหนดไว้', en: 'The controller gain is too high, so the output reacts harder than the band allows' }
      ],
      answer: 1,
      explain: {
        th: 'ตัวควบคุม ON–OFF ไม่มีอัตราขยายให้ตั้ง และไม่มีกลไกขยายแถบเอง ส่วนความคลาดเคลื่อนของเซนเซอร์จะทำให้แถบ <em>เลื่อน</em> ทั้งแถบ แต่ไม่ทำให้ <em>กว้างขึ้น</em> สิ่งที่ทำให้กว้างขึ้นคือความหน่วงตามสมการ (7.2)',
        en: 'An ON–OFF controller has no gain to set and no mechanism to widen its own band, and a sensor bias <em>shifts</em> the band without <em>widening</em> it. What widens it is dead time, as equation (7.2) states.'
      }
    },
    {
      q: {
        th: 'ระบบที่ใช้ตัวควบคุมสัดส่วนล้วนนิ่งอยู่ที่ 28.5 °C ทั้งที่ตั้งเป้าไว้ 30 °C และรอมานานแล้ว ข้อสรุปใดถูกต้อง',
        en: 'A purely proportional loop sits steady at 28.5 °C although the target is 30 °C, and has done for a long time. Which conclusion is right?'
      },
      options: [
        { th: 'ตัวควบคุมมีความผิดพลาด เพราะระบบป้อนกลับที่ทำงานถูกต้องต้องขจัดความคลาดเคลื่อนได้เสมอ', en: 'The controller is faulty, since a properly working feedback loop always eliminates error' },
        { th: 'เซนเซอร์อุณหภูมิมีอคติ 1.5 °C ควรสอบเทียบใหม่แล้วปัญหาจะหายไปเองโดยไม่ต้องแก้อื่น', en: 'The sensor carries a 1.5 °C bias; recalibrate it and the problem disappears on its own' },
        { th: 'ระบบยังไม่เข้าสู่สถานะคงตัว ต้องรอต่ออีกประมาณห้าเท่าของค่าคงที่เวลาจึงจะถึงเป้าหมาย', en: 'It has not settled yet; wait about five more time constants and it will reach target' },
        { th: 'เป็นออฟเซตตามปกติของตัวควบคุมสัดส่วน ซึ่งเกิดเพราะมันต้องมีความคลาดเคลื่อนจึงจะมีเอาต์พุต', en: 'This is the normal proportional offset: the controller needs an error to produce output' }
      ],
      answer: 3,
      explain: {
        th: 'ออฟเซตเป็นข้อจำกัดเชิงโครงสร้างของตัวควบคุมสัดส่วน ไม่ใช่ความผิดพลาด ตัวเลือกที่บอกให้รอต่อก็ผิด เพราะคำว่า “นิ่งแล้ว” หมายความว่าผ่านช่วงชั่วครู่ไปแล้ว ส่วนการสอบเทียบเซนเซอร์แก้ได้เฉพาะกรณีที่อคติเป็นสาเหตุจริง ซึ่งจะทำให้ค่าผิดแม้เปลี่ยนอัตราขยาย',
        en: 'Offset is a structural limitation of proportional control, not a fault. Waiting longer is wrong because “steady” already means the transient is over, and recalibration only helps if a bias is genuinely the cause — which would show as an error unchanged by a change of gain.'
      }
    },
    {
      q: {
        th: 'เทอมอินทิกรัลในตัวควบคุม PI ทำหน้าที่ใด',
        en: 'What does the integral term in a PI controller do?'
      },
      options: [
        { th: 'สะสมความคลาดเคลื่อนไว้ ทำให้ยังมีเอาต์พุตเหลืออยู่แม้ความคลาดเคลื่อนจะเป็นศูนย์แล้ว', en: 'Accumulates the error so output remains even once the error has reached zero' },
        { th: 'จำกัดอัตราการเปลี่ยนแปลงของเอาต์พุต เพื่อไม่ให้แอคชูเอเตอร์ถูกสั่งเปลี่ยนเร็วเกินไป', en: 'Limits how fast the output may change, so the actuator is never asked to move too quickly' },
        { th: 'กรองสัญญาณรบกวนความถี่สูงออกจากค่าที่วัดได้ ก่อนส่งเข้าสู่การคำนวณเอาต์พุต', en: 'Filters high-frequency noise out of the measurement before the output is computed' },
        { th: 'ทำนายทิศทางที่ค่ากำลังจะไป แล้วลดเอาต์พุตล่วงหน้าเพื่อไม่ให้พุ่งเกินเป้าหมาย', en: 'Predicts where the value is heading and eases off early so it does not overshoot' }
      ],
      answer: 0,
      explain: {
        th: 'การทำนายล่วงหน้าเป็นหน้าที่ของเทอมอนุพันธ์ ส่วนการกรองสัญญาณและการจำกัดอัตราการเปลี่ยนแปลงเป็นฟังก์ชันเสริมคนละส่วน ที่บางตัวควบคุมมีให้แต่ไม่ใช่เทอม I',
        en: 'Looking ahead is the derivative term&rsquo;s job, while filtering and rate limiting are separate features some controllers offer — neither is the I term.'
      }
    },
    {
      q: {
        th: 'โรงเรือนเปิดฮีตเตอร์เต็ม 100% ตลอดคืนที่หนาวจัดแต่ยังไปไม่ถึงเป้า พอเช้าแดดออกอุณหภูมิกลับพุ่งเกินเป้าไป 4 °C แล้วค่อย ๆ ลง สาเหตุคือข้อใด',
        en: 'A greenhouse runs its heater at 100% all through a cold night without reaching target; at sunrise it overshoots by 4 °C before easing back. Why?'
      },
      options: [
        { th: 'เซนเซอร์มีค่าคงที่เวลาสูง จึงรายงานอุณหภูมิช้ากว่าความจริงราวหนึ่งถึงสองชั่วโมง', en: 'The probe&rsquo;s time constant is so large that it reports an hour or two behind reality' },
        { th: 'ฮีตเตอร์มีความร้อนสะสมในตัวมาก จึงยังปล่อยความร้อนต่อหลังถูกสั่งปิดไปแล้วหลายชั่วโมง', en: 'The heater stores so much heat that it keeps emitting for hours after being switched off' },
        { th: 'เทอมอินทิกรัลสะสมค่าไว้มากระหว่างที่เอาต์พุตอิ่มตัว และต้องคลายออกก่อนจึงจะลดกำลังได้', en: 'The integral built up while the output was saturated and must unwind before power can drop' },
        { th: 'อัตราขยายของตัวควบคุมต่ำเกินไป จึงตอบสนองต่อการเปลี่ยนแปลงในตอนเช้าได้ไม่ทันเวลา', en: 'The controller gain is too low to react in time to the change at sunrise' }
      ],
      answer: 2,
      explain: {
        th: 'นี่คือวินด์อัปแบบตำรา ลายเซ็นคือเอาต์พุตอิ่มตัวนาน ตามด้วยการพุ่งเกินและฟื้นตัวช้าเมื่อสถานการณ์เปลี่ยน ตัวเลือกเรื่องความร้อนสะสมและเซนเซอร์ช้าอธิบายการพุ่งเกินในระดับนาทีได้ แต่ไม่ได้อธิบายการค้างนานเป็นชั่วโมง',
        en: 'This is textbook windup: the signature is a long period of saturated output followed by overshoot and slow recovery when conditions change. Stored heat or a slow probe could explain minutes of overshoot, not hours of it.'
      }
    },
    {
      q: {
        th: 'เหตุใดโรงเรือนควบคุมอุณหภูมิส่วนใหญ่จึงตั้ง \\( T_d = 0 \\) คือไม่ใช้เทอมอนุพันธ์เลย',
        en: 'Why do most temperature-controlled greenhouses set \\( T_d = 0 \\), using no derivative action at all?'
      },
      options: [
        { th: 'เพราะเทอมอนุพันธ์ทำให้เกิดออฟเซตถาวร ซึ่งขัดกับจุดประสงค์ของการใช้เทอมอินทิกรัล', en: 'Because derivative action creates a permanent offset, defeating the integral term' },
        { th: 'เพราะตัวควบคุมอุตสาหกรรมส่วนใหญ่ไม่มีเทอมอนุพันธ์ให้ตั้งค่าในเมนูมาตรฐานของเครื่อง', en: 'Because most industrial controllers do not offer a derivative setting in their standard menu' },
        { th: 'เพราะเทอมอนุพันธ์ใช้ได้เฉพาะกับระบบที่มีแบบจำลองอันดับสอง ส่วนโรงเรือนเป็นอันดับหนึ่ง', en: 'Because derivative action suits only second-order systems, and a greenhouse is first-order' },
        { th: 'เพราะสัญญาณอุณหภูมิมีสัญญาณรบกวนสูง และพลวัตช้าอยู่แล้ว ประโยชน์จึงน้อยกว่าโทษ', en: 'Because the signal is noisy and the dynamics already slow, so the benefit is outweighed' }
      ],
      answer: 3,
      explain: {
        th: 'เทอมอนุพันธ์ขยายสัญญาณรบกวนอย่างรุนแรง และสิ่งที่มันให้คือการมองล่วงหน้าซึ่งมีค่าน้อยเมื่อระบบเปลี่ยนแปลงช้าอยู่แล้ว ส่วนข้อที่บอกว่ามันสร้างออฟเซตนั้นผิด เพราะเทอมอนุพันธ์เป็นศูนย์เมื่อค่านิ่ง จึงไม่กระทบสถานะคงตัวเลย',
        en: 'Derivative action amplifies noise badly, and what it offers — anticipation — is worth little when the system is already slow. The claim that it creates offset is wrong: the term is zero when the value is steady, so it does not touch the steady state.'
      }
    },
    {
      q: {
        th: 'เมื่อผู้ใช้เปลี่ยนค่าเป้าหมายบนหน้าจอจาก 28 เป็น 32 °C เอาต์พุตของตัวควบคุม PID กระชากเต็มสเกลหนึ่งครั้งทันที วิธีแก้มาตรฐานคือข้อใด',
        en: 'When the operator steps the setpoint from 28 to 32 °C, a PID output slams to full scale once. What is the standard remedy?'
      },
      options: [
        { th: 'ใส่วงจรกรองความถี่ต่ำผ่านที่สัญญาณค่าเป้าหมาย เพื่อให้การเปลี่ยนแปลงค่อยเป็นค่อยไป', en: 'Low-pass filter the setpoint so the change arrives gradually rather than at once' },
        { th: 'คำนวณเทอมอนุพันธ์จากค่าที่วัดได้แทนความคลาดเคลื่อน เพราะค่าที่วัดได้ไม่ได้กระโดดตามเป้าหมาย', en: 'Take the derivative of the measurement, which does not jump when the setpoint does' },
        { th: 'ลดอัตราขยาย \\( K_p \\) ลงครึ่งหนึ่ง เพื่อให้เอาต์พุตตอบสนองต่อการเปลี่ยนเป้าหมายน้อยลง', en: 'Halve \\( K_p \\) so the output responds less strongly to a change of setpoint' },
        { th: 'เพิ่มเวลารีเซ็ต \\( T_i \\) ให้ยาวขึ้น เพื่อชะลอการสะสมของเทอมอินทิกรัลในช่วงเปลี่ยนเป้าหมาย', en: 'Lengthen \\( T_i \\) so the integral accumulates more slowly during the change' }
      ],
      answer: 1,
      explain: {
        th: 'อาการกระชากครั้งเดียวตอนเปลี่ยนเป้าหมายคือเดริเวทีฟคิก ซึ่งเกิดจากอนุพันธ์ของขั้นบันไดที่มีค่ามหาศาล การกรองค่าเป้าหมายใช้ได้ผลจริงและมีใช้ในบางระบบ แต่เป็นวิธีอ้อม ส่วนการลดอัตราขยายจะทำให้ผลตอบสนองทั้งหมดแย่ลงเพื่อแก้อาการเดียว',
        en: 'A single lurch on a setpoint change is derivative kick, from the enormous derivative of a step. Filtering the setpoint does work and is used in some systems, but indirectly, while lowering the gain degrades the whole response to fix one symptom.'
      }
    },
    {
      q: {
        th: 'ตัวควบคุมรูปมาตรฐานตั้งไว้ที่ \\( K_p = 2 \\) และ \\( T_i = 10 \\) s ถ้าต้องย้ายค่าไปใส่ในตัวควบคุมรูปขนาน ค่า \\( K_i \\) ควรเป็นเท่าใด',
        en: 'A standard-form controller is set to \\( K_p = 2 \\) and \\( T_i = 10 \\) s. Moving these to a parallel-form controller, what should \\( K_i \\) be?'
      },
      options: [
        { th: '20 เพราะต้องคูณอัตราขยายสัดส่วนเข้ากับเวลารีเซ็ตเพื่อให้ได้อัตราขยายของเทอมอินทิกรัล', en: '20, the integral gain being the proportional gain multiplied by the reset time' },
        { th: '10 เพราะเวลารีเซ็ตในรูปมาตรฐานมีค่าเท่ากับอัตราขยายอินทิกรัลในรูปขนานโดยตรง', en: '10, the integral gain in parallel form equalling the reset time in standard form' },
        { th: '0.2 เพราะอัตราขยายของเทอมอินทิกรัลคืออัตราขยายสัดส่วนหารด้วยเวลารีเซ็ตที่ตั้งไว้', en: '0.2, the integral gain being the proportional gain divided by the reset time' },
        { th: '2 เพราะอัตราขยายสัดส่วนไม่เปลี่ยนเมื่อย้ายระหว่างสองรูป เทอมอินทิกรัลจึงใช้ค่าเดียวกัน', en: '2, the integral gain being unchanged because the proportional gain is unchanged' }
      ],
      answer: 2,
      explain: {
        th: 'จากสมการ (7.12): \\( K_i = K_p/T_i = 2/10 = 0.2 \\) การคูณแทนการหารเป็นความผิดพลาดที่พบบ่อยที่สุด และทำให้เทอมอินทิกรัลแรงกว่าที่ตั้งใจถึงหนึ่งร้อยเท่าในกรณีนี้',
        en: 'From equation (7.12): \\( K_i = K_p/T_i = 2/10 = 0.2 \\). Multiplying instead of dividing is the commonest slip, and here it would make the integral a hundred times stronger than intended.'
      }
    },
    {
      q: {
        th: 'กฎ Ziegler–Nichols ให้ค่าที่ทำให้ระบบพุ่งเกินและแกว่งสองสามรอบก่อนเข้าที่ ข้อสรุปใดเหมาะสมที่สุด',
        en: 'The Ziegler–Nichols rules give settings that overshoot and ring a few times before settling. Which conclusion is soundest?'
      },
      options: [
        { th: 'กฎนี้ให้จุดตั้งต้นที่ดี แล้วลด \\( K_p \\) ลงเพื่อให้นิ่งขึ้นตามความไวของพืชที่ปลูก', en: 'They give a good starting point, after which \\( K_p \\) is lowered to suit the crop&rsquo;s sensitivity' },
        { th: 'การพุ่งเกินแสดงว่าคำนวณผิด ควรตรวจค่า \\( K_u \\) และ \\( P_u \\) ที่วัดได้ใหม่อีกครั้ง', en: 'The overshoot shows a calculation error; re-check the measured \\( K_u \\) and \\( P_u \\)' },
        { th: 'ควรเพิ่ม \\( T_d \\) ให้มากขึ้นกว่าที่กฎกำหนด เพื่อกำจัดการพุ่งเกินออกไปให้หมดทุกกรณี', en: 'Raise \\( T_d \\) above what the rules give, eliminating the overshoot entirely' },
        { th: 'กฎนี้ใช้ไม่ได้กับงานเกษตร ควรเปลี่ยนไปใช้วิธีลองผิดลองถูกด้วยมือตั้งแต่ต้นแทนจะดีกว่า', en: 'The rules do not suit agriculture; hand trial and error from the start is better' }
      ],
      answer: 0,
      explain: {
        th: 'กฎนี้ออกแบบมาให้ได้อัตราการลดทอนราวหนึ่งในสี่ การพุ่งเกินจึงเป็นผลที่ตั้งใจ ไม่ใช่ความผิดพลาด ส่วนการเพิ่ม \\( T_d \\) มาก ๆ จะขยายสัญญาณรบกวนจนระบบใช้งานไม่ได้ในทางปฏิบัติ',
        en: 'The rules target roughly quarter-amplitude damping, so the overshoot is intended rather than an error, and pushing \\( T_d \\) well above the rule amplifies noise until the loop is unusable in practice.'
      }
    }
  ]
});

AMRQuiz.mount('ch07-post', {
  type: 'post',
  chapter: 'ch07',
  title: { th: 'แบบทดสอบหลังเรียน — บทที่ 7', en: 'Post-test — Chapter 7' },
  intro: {
    th: 'สิบข้อ เน้นการวินิจฉัยอาการ การคำนวณค่าจูน และการเลือกค่าที่จะส่งมอบจริง เกณฑ์ผ่าน 70%',
    en: 'Ten items on diagnosing symptoms, computing tuning values and choosing what to ship. Pass mark 70%.'
  },
  questions: [
    {
      q: {
        th: 'กระบวนการมี \\( K = 6.0 \\) °C/kW ใช้ตัวควบคุมสัดส่วน \\( K_p = 0.25 \\) kW/°C ต้องยกอุณหภูมิขึ้น 6 °C จากค่าฐาน ออฟเซตที่สถานะคงตัวเป็นเท่าใด',
        en: 'A process has \\( K = 6.0 \\) °C/kW under proportional control at \\( K_p = 0.25 \\) kW/°C, lifting the temperature 6 °C above base. What is the steady-state offset?'
      },
      options: [
        { th: '0.0 °C เพราะระบบป้อนกลับจะขจัดความคลาดเคลื่อนได้หมดเมื่อเข้าสู่สถานะคงตัวแล้ว', en: '0.0 °C, since feedback removes the error entirely once steady state is reached' },
        { th: '1.5 °C จากการหารการยกอุณหภูมิด้วยอัตราขยายวงรอบโดยไม่บวกหนึ่งที่ตัวส่วน', en: '1.5 °C, dividing the temperature lift by the loop gain, without the added one' },
        { th: '2.4 °C จากการหารการยกอุณหภูมิด้วยหนึ่งบวกอัตราขยายวงรอบของระบบนี้ตามสูตร', en: '2.4 °C, dividing the temperature lift by one plus the loop gain of the system' },
        { th: '6.0 °C เพราะตัวควบคุมสัดส่วนไม่สามารถลดความคลาดเคลื่อนลงได้เลยด้วยตัวของมันเอง', en: '6.0 °C, since proportional control cannot reduce an error at all on its own' }
      ],
      answer: 2,
      explain: {
        th: 'อัตราขยายวงรอบคือ \\( K K_p = 1.5 \\) จากสมการ (7.5) ได้ \\( 6/(1+1.5) = 2.4 \\) °C ตัวเลือกที่ตอบ 1.5 °C มาจากการลืมบวกหนึ่ง ซึ่งเป็นความผิดพลาดที่พบบ่อยที่สุดในการใช้สมการนี้',
        en: 'The loop gain is \\( K K_p = 1.5 \\), so equation (7.5) gives \\( 6/(1+1.5) = 2.4 \\) °C. The 1.5 °C answer comes from forgetting the added one, the commonest slip with this formula.'
      }
    },
    {
      q: {
        th: 'การทดสอบในปฏิบัติการได้ \\( K_u = 4.0 \\) และ \\( P_u = 12 \\) s ค่าตั้ง PID ตามกฎ Ziegler–Nichols คือข้อใด',
        en: 'A test gives \\( K_u = 4.0 \\) and \\( P_u = 12 \\) s. What are the Ziegler–Nichols PID settings?'
      },
      options: [
        { th: '\\( K_p = 2.4,\\ T_i = 6.0 \\) s, \\( T_d = 1.5 \\) s', en: '\\( K_p = 2.4,\\ T_i = 6.0 \\) s, \\( T_d = 1.5 \\) s' },
        { th: '\\( K_p = 2.0,\\ T_i = 10 \\) s, \\( T_d = 3.0 \\) s', en: '\\( K_p = 2.0,\\ T_i = 10 \\) s, \\( T_d = 3.0 \\) s' },
        { th: '\\( K_p = 1.8,\\ T_i = 10 \\) s, \\( T_d = 1.5 \\) s', en: '\\( K_p = 1.8,\\ T_i = 10 \\) s, \\( T_d = 1.5 \\) s' },
        { th: '\\( K_p = 2.4,\\ T_i = 24 \\) s, \\( T_d = 0.75 \\) s', en: '\\( K_p = 2.4,\\ T_i = 24 \\) s, \\( T_d = 0.75 \\) s' }
      ],
      answer: 0,
      explain: {
        th: 'จากตารางที่ 7.2 แถว PID: \\( K_p = 0.6(4.0) = 2.4 \\), \\( T_i = 0.5(12) = 6.0 \\) s และ \\( T_d = 0.125(12) = 1.5 \\) s ตัวเลือกที่ \\( T_i = 24 \\) s มาจากการ <em>คูณ</em> สองแทนการคูณ 0.5 ซึ่งทำให้เทอมอินทิกรัลอ่อนเกินไปสี่เท่า',
        en: 'From the PID row of Table 7.2: \\( K_p = 0.6(4.0) = 2.4 \\), \\( T_i = 0.5(12) = 6.0 \\) s and \\( T_d = 0.125(12) = 1.5 \\) s. The \\( T_i = 24 \\) s option multiplies by two instead of by 0.5, leaving the integral four times too weak.'
      }
    },
    {
      q: {
        th: 'ในแอนิเมชัน 7.1 เมื่อเพิ่มความหน่วงเวลาโดยคงแถบตายไว้เท่าเดิม จำนวนครั้งการสลับต่อนาทีเปลี่ยนไปอย่างไร และเพราะเหตุใด',
        en: 'In Animation 7.1, raising the dead time while holding the deadband changes the switches per minute how, and why?'
      },
      options: [
        { th: 'ไม่เปลี่ยน เพราะจำนวนครั้งการสลับถูกกำหนดโดยความกว้างของแถบตายเพียงอย่างเดียว', en: 'They are unchanged, the switching rate being fixed by the width of the deadband' },
        { th: 'เพิ่มขึ้นแล้วลดลง เพราะความหน่วงที่มากพอจะทำให้ตัวควบคุมข้ามขอบไปโดยไม่ตรวจพบ', en: 'They rise then fall, since enough dead time lets the controller miss a limit crossing' },
        { th: 'เพิ่มขึ้น เพราะอุณหภูมิเลยขอบแถบตายออกไป ทำให้ตัวควบคุมต้องสลับบ่อยกว่าเดิมเพื่อดึงกลับ', en: 'They rise, since the temperature passes the limits and must be hauled back more often' },
        { th: 'ลดลง เพราะการแกว่งแต่ละรอบกว้างขึ้นจึงใช้เวลานานขึ้นกว่าจะกลับมาถึงขอบอีกด้าน', en: 'They fall, since each wider swing takes longer to travel back to the opposite limit' }
      ],
      answer: 3,
      explain: {
        th: 'ความหน่วงทำให้แต่ละรอบกินเวลานานขึ้น ความถี่จึงลดลง ขณะที่ความกว้างของการแกว่งโตขึ้น นี่คือเหตุผลที่ความหน่วงสูงทำให้ <em>คุณภาพการควบคุมแย่ลง</em> แต่ไม่ได้ทำให้อุปกรณ์สึกเร็วขึ้น ซึ่งเป็นสองเรื่องที่มักถูกเหมารวมกัน',
        en: 'Dead time lengthens each cycle, so the frequency falls while the swing widens. That is why more dead time degrades <em>control quality</em> without wearing the hardware faster — two things often wrongly lumped together.'
      }
    },
    {
      q: {
        th: 'ตัวควบคุมรูปมาตรฐานตั้ง \\( K_p = 1.5 \\) ถ้าเพิ่ม \\( K_p \\) เป็น 3.0 โดยไม่แตะ \\( T_i \\) และ \\( T_d \\) ผลที่เกิดกับเทอมอินทิกรัลคือข้อใด',
        en: 'A standard-form controller has \\( K_p = 1.5 \\). Raising it to 3.0 without touching \\( T_i \\) or \\( T_d \\) does what to the integral action?'
      },
      options: [
        { th: 'เทอมอินทิกรัลไม่เปลี่ยน เพราะความแรงของมันถูกกำหนดโดยเวลารีเซ็ตเพียงอย่างเดียวเท่านั้น', en: 'It is unchanged, the strength of the integral being set by the reset time alone' },
        { th: 'เทอมอินทิกรัลแรงขึ้นเป็นสองเท่าด้วย เพราะอัตราขยายคูณอยู่นอกวงเล็บจึงกระทบทั้งสามเทอม', en: 'It doubles too, since the gain multiplies the bracket and scales all three terms' },
        { th: 'เทอมอินทิกรัลอ่อนลงครึ่งหนึ่ง เพราะอัตราขยายที่สูงขึ้นทำให้ความคลาดเคลื่อนลดลงเร็วกว่าเดิม', en: 'It halves, since the higher gain drives the error down faster than before' },
        { th: 'เทอมอินทิกรัลหยุดทำงานชั่วคราว จนกว่าเอาต์พุตจะกลับเข้าสู่ช่วงที่ไม่อิ่มตัวอีกครั้ง', en: 'It pauses until the saturated output returns to its normal working range' }
      ],
      answer: 1,
      explain: {
        th: 'นี่คือความต่างที่สำคัญระหว่างรูปมาตรฐานกับรูปขนาน ในรูปมาตรฐาน \\( K_p \\) คูณทั้งวงเล็บ การเพิ่มอัตราขยายจึงเปลี่ยนความแรงของทั้ง P, I และ D พร้อมกัน ส่วนในรูปขนานจะกระทบเฉพาะเทอม P',
        en: 'This is the key difference between the forms. In the standard form \\( K_p \\) multiplies the whole bracket, so raising it scales P, I and D together; in the parallel form it would touch only P.'
      }
    },
    {
      q: {
        th: 'ระบบหนึ่งแสดงอาการ: เอาต์พุตของตัวควบคุมกระตุกขึ้นลงรุนแรงตลอดเวลา ทั้งที่อุณหภูมิที่วัดได้เปลี่ยนแปลงเพียงเล็กน้อย สาเหตุที่น่าจะเป็นที่สุดคือข้อใด',
        en: 'A loop shows this: the controller output jitters violently although the measured temperature barely moves. The likeliest cause is which?'
      },
      options: [
        { th: 'เทอมอนุพันธ์ขยายสัญญาณรบกวนในสัญญาณวัด เพราะอนุพันธ์ของสัญญาณรบกวนมีขนาดใหญ่', en: 'Derivative action is amplifying measurement noise, whose derivative is large' },
        { th: 'เกิดวินด์อัปขึ้น ทำให้ค่าสะสมภายในสูงจนเอาต์พุตแกว่งไปมาระหว่างขีดจำกัดทั้งสองด้าน', en: 'Windup has driven the internal store so high that the output swings between its limits' },
        { th: 'อัตราขยายสัดส่วนสูงเกินไป ทำให้ความคลาดเคลื่อนเล็กน้อยถูกขยายจนเอาต์พุตเต็มสเกล', en: 'The proportional gain is so high that a small error saturates the output' },
        { th: 'เทอมอินทิกรัลสะสมเร็วเกินไป เพราะตั้งเวลารีเซ็ตไว้สั้นกว่าค่าคงที่เวลาของกระบวนการมาก', en: 'The integral accumulates too fast, its reset time far below the process time constant' }
      ],
      answer: 0,
      explain: {
        th: 'กุญแจอยู่ที่วลี “อุณหภูมิเปลี่ยนแปลงเพียงเล็กน้อย” ซึ่งตัดสาเหตุที่ต้องอาศัยความคลาดเคลื่อนขนาดใหญ่ออกไปทั้งหมด เหลือเพียงเทอมที่ตอบสนองต่อ <em>อัตราการเปลี่ยนแปลง</em> ซึ่งสัญญาณรบกวนความถี่สูงทำให้มีค่ามหาศาลแม้แอมพลิจูดจะเล็ก',
        en: 'The key phrase is “the temperature barely moves”, which rules out every cause that needs a large error and leaves only the term responding to a <em>rate of change</em> — enormous for high-frequency noise even at tiny amplitude.'
      }
    },
    {
      q: {
        th: 'ตู้ฟักไข่ต้องการความแม่นยำ ±0.3 °C ส่วนโรงเพาะเห็ดยอมรับ ±1.0 °C ได้ ข้อใดเป็นการเลือกตัวควบคุมที่เหมาะสมที่สุด',
        en: 'An incubator needs ±0.3 °C while a mushroom house tolerates ±1.0 °C. Which choice of controllers is soundest?'
      },
      options: [
        { th: 'ตู้ฟักไข่ใช้ ON–OFF ได้เพราะปริมาตรเล็กจึงนิ่งกว่า ส่วนโรงเพาะเห็ดต้องใช้ PID เพราะใหญ่กว่า', en: 'The incubator can use ON–OFF, being small and steady; the mushroom house needs PID, being large' },
        { th: 'ทั้งคู่ใช้ ON–OFF ได้ โดยตั้งแถบตูายของตู้ฟักไข่ให้แคบกว่าเพื่อให้ได้ความแม่นยำที่ต้องการ', en: 'Both can use ON–OFF, the incubator simply taking a narrower deadband for its accuracy' },
        { th: 'ตู้ฟักไข่ต้องใช้ตัวควบคุมต่อเนื่อง ส่วนโรงเพาะเห็ดใช้ ON–OFF พร้อมแถบตายที่เหมาะสมได้', en: 'The incubator needs continuous control; the mushroom house can use ON–OFF with a suitable band' },
        { th: 'ทั้งคู่ต้องใช้ PID เพราะการควบคุมอุณหภูมิของสิ่งมีชีวิตต้องการความแม่นยำสูงเสมอ', en: 'Both need PID, since controlling temperature for living things always demands high accuracy' }
      ],
      answer: 2,
      explain: {
        th: 'การแกว่งภายใต้ ON–OFF กว้างกว่าแถบตายเสมอตามสมการ (7.2) การตั้งแถบให้แคบมากจึงไม่ได้ให้ความแม่นยำตามที่หวัง แต่กลับทำให้สลับถี่จนอุปกรณ์พัง ±0.3 °C จึงอยู่นอกวิสัยของ ON–OFF ส่วนปริมาตรที่เล็กกว่ากลับทำให้ \\( \\tau \\) สั้นลงและแกว่งเร็วขึ้น ไม่ใช่ช้าลง',
        en: 'An ON–OFF swing always exceeds its deadband by equation (7.2), so a very narrow band does not deliver the hoped-for accuracy and instead switches the hardware to death. ±0.3 °C is beyond ON–OFF. A smaller volume also shortens \\( \\tau \\) and cycles faster, not slower.'
      }
    },
    {
      q: {
        th: 'ในแอนิเมชัน 7.2 เมื่อปิดแอนติวินด์อัปแล้วใส่สิ่งรบกวนจนเอาต์พุตอิ่มตัวนาน แล้วปลดสิ่งรบกวนออก สิ่งที่สังเกตได้คือข้อใด',
        en: 'In Animation 7.2, with anti-windup off, applying a disturbance until the output saturates for a long time and then removing it shows what?'
      },
      options: [
        { th: 'เอาต์พุตลดลงทันทีที่สิ่งรบกวนหายไป เพราะความคลาดเคลื่อนกลับเป็นศูนย์ในรอบคำนวณเดียว', en: 'The output drops the instant the disturbance goes, the error returning to zero in one cycle' },
        { th: 'เอาต์พุตยังคงเต็มอยู่อีกระยะหนึ่ง อุณหภูมิจึงพุ่งเลยเป้าไปมากก่อนที่ค่าสะสมจะคลายออกหมด', en: 'The output stays pinned a while, so the temperature sails past target before the store unwinds' },
        { th: 'เอาต์พุตแกว่งขึ้นลงด้วยความถี่สูง เพราะค่าสะสมที่มากทำให้ระบบเข้าสู่สภาวะไม่เสถียร', en: 'The output oscillates rapidly, the large store having driven the loop unstable' },
        { th: 'เอาต์พุตค้างที่ศูนย์เป็นเวลานาน เพราะค่าสะสมติดลบมากจากช่วงที่ความคลาดเคลื่อนเป็นบวก', en: 'The output sits at zero for a long time, the store having gone far negative' }
      ],
      answer: 1,
      explain: {
        th: 'ค่าที่สะสมไว้ระหว่างอิ่มตัวต้องถูกคลายออกด้วยความคลาดเคลื่อนที่กลับเครื่องหมาย ซึ่งหมายความว่าอุณหภูมิต้องเลยเป้าไปก่อนและค้างอยู่อย่างนั้นสักระยะ นี่คือเหตุผลที่สมการ (7.8) หยุดการสะสมทันทีที่เอาต์พุตชนขีดจำกัด',
        en: 'What accumulated during saturation can only unwind through an error of the opposite sign, which means the temperature must first pass the target and stay there a while. That is why equation (7.8) stops accumulating the moment the output hits its limit.'
      }
    },
    {
      q: {
        th: 'จากแบบจำลอง FOPDT ที่มี \\( K = 5 \\) °C/kW, \\( \\tau = 10 \\) นาที และ \\( \\theta = 2 \\) นาที ค่า \\( K_p \\) สำหรับตัวควบคุม PI ตามตารางที่ 7.1 เป็นเท่าใด',
        en: 'From a FOPDT model with \\( K = 5 \\) °C/kW, \\( \\tau = 10 \\) min and \\( \\theta = 2 \\) min, what \\( K_p \\) does Table 7.1 give for a PI controller?'
      },
      options: [
        { th: '0.36 kW/°C จากการสลับที่ของค่าคงที่เวลากับความหน่วงเวลาในสูตรที่ใช้คำนวณ', en: '0.36 kW/°C, from swapping the time constant and the dead time in the formula' },
        { th: '4.5 kW/°C จากการลืมหารด้วยอัตราขยายของกระบวนการในขั้นตอนสุดท้ายของการคำนวณ', en: '4.5 kW/°C, from omitting the process gain in the final step' },
        { th: '1.2 kW/°C จากการใช้สูตรของตัวควบคุม PID แทนที่จะเป็นสูตรของ PI ในตารางเดียวกัน', en: '1.2 kW/°C, using the PID row of the table instead of the PI row' },
        { th: '0.9 kW/°C จากการแทนค่าในสูตรของแถว PI ในตารางที่ 7.1 โดยตรง', en: '0.9 kW/°C, substituting directly into the PI row of Table 7.1' }
      ],
      answer: 3,
      explain: {
        th: 'แถว PI ให้ \\( K_p = 0.9\\tau/(K\\theta) = 0.9(10)/((5)(2)) = 0.9 \\) kW/°C ตัวเลือกอื่นแต่ละข้อสะท้อนความผิดพลาดที่พบจริง คือใช้ผิดแถว สลับ \\( \\tau \\) กับ \\( \\theta \\) และลืมหารด้วย \\( K \\)',
        en: 'The PI row gives \\( K_p = 0.9\\tau/(K\\theta) = 0.9(10)/((5)(2)) = 0.9 \\) kW/°C. Each wrong option mirrors a real mistake: reading the wrong row, swapping \\( \\tau \\) with \\( \\theta \\), and forgetting to divide by \\( K \\).'
      }
    },
    {
      q: {
        th: 'ทีมหนึ่งพบว่าตัวควบคุม PI ของโรงเรือนตอบสนองช้ามากหลังเปลี่ยนค่าเป้าหมาย แต่ไม่พุ่งเกินเลย ควรปรับอย่างไรก่อนเป็นอันดับแรก',
        en: 'A greenhouse PI responds very sluggishly to a setpoint change but never overshoots. What should be adjusted first?'
      },
      options: [
        { th: 'เพิ่ม \\( K_p \\) ขึ้นทีละน้อยจนเริ่มเห็นการพุ่งเกินเล็กน้อย แล้วถอยกลับมาหนึ่งขั้น', en: 'Raise \\( K_p \\) in small steps until a little overshoot appears, then back off one step' },
        { th: 'เพิ่ม \\( T_i \\) ให้ยาวขึ้น เพื่อให้เทอมอินทิกรัลสะสมช้าลงและระบบนิ่งกว่าเดิม', en: 'Lengthen \\( T_i \\) so the integral accumulates more slowly and the loop is calmer' },
        { th: 'เพิ่ม \\( T_d \\) จากศูนย์ เพื่อให้ตัวควบคุมมองล่วงหน้าและเร่งการตอบสนองให้เร็วขึ้น', en: 'Raise \\( T_d \\) from zero so the controller looks ahead and speeds the response' },
        { th: 'ลด \\( K_p \\) ลงครึ่งหนึ่ง เพื่อให้ระบบมีเสถียรภาพมากขึ้นก่อนแล้วจึงค่อยปรับเทอมอื่น', en: 'Halve \\( K_p \\) to make the loop more stable before adjusting anything else' }
      ],
      answer: 0,
      explain: {
        th: 'อาการช้าแต่ไม่พุ่งเกินคือลายเซ็นของอัตราขยายที่ต่ำเกินไป การเพิ่ม \\( T_i \\) หรือลด \\( K_p \\) จะยิ่งช้าลงไปอีก ส่วนเทอม D ไม่ได้เร่งการตอบสนอง แต่ทำหน้าที่ลดการพุ่งเกินซึ่งระบบนี้ไม่มีอยู่แล้ว',
        en: 'Sluggish without overshoot is the signature of too little gain. Lengthening \\( T_i \\) or halving \\( K_p \\) would slow it further, and the D term does not speed a response — it tames an overshoot this loop does not have.'
      }
    },
    {
      q: {
        th: 'โรงเรือนปลูกผักสลัดไวต่อการแกว่งของอุณหภูมิมาก หลังจูนด้วยกฎ ZN แล้วได้ผลที่พุ่งเกิน 25% ควรทำอย่างไรก่อนส่งมอบงาน',
        en: 'A lettuce house is very sensitive to temperature swings, and the ZN tuning gives 25% overshoot. What should be done before handover?'
      },
      options: [
        { th: 'เปลี่ยนไปใช้ตัวควบคุม ON–OFF แทน เพราะไม่มีการพุ่งเกินแบบที่เห็นในผลตอบสนองของ PID', en: 'Switch to ON–OFF instead, which shows none of the overshoot seen in the PID response' },
        { th: 'เพิ่ม \\( T_d \\) เป็นสองเท่าของค่าที่กฎกำหนด เพื่อกดการพุ่งเกินลงโดยไม่ต้องแตะอัตราขยาย', en: 'Double \\( T_d \\) beyond the rule to suppress the overshoot without touching the gain' },
        { th: 'ส่งมอบตามค่าที่คำนวณได้ เพราะกฎ ZN เป็นมาตรฐานสากลที่ผ่านการพิสูจน์มาแล้วอย่างยาวนาน', en: 'Ship the computed values, the ZN rules being a long-proven international standard' },
        { th: 'ลด \\( K_p \\) ลงราวครึ่งหนึ่งแล้วทดสอบซ้ำ ยอมให้เข้าที่ช้าลงเพื่อแลกกับการแกว่งที่น้อยลง', en: 'Halve \\( K_p \\) and retest, accepting slower settling in exchange for a calmer response' }
      ],
      answer: 3,
      explain: {
        th: 'กฎ ZN ตั้งใจให้พุ่งเกินราวนี้ จึงต้องถือเป็นจุดตั้งต้นแล้วปรับตามความต้องการของพืช การเปลี่ยนไปใช้ ON–OFF ไม่ได้แก้ปัญหาเพราะมันแกว่งตลอดเวลาอยู่แล้ว ส่วนการเพิ่ม \\( T_d \\) มากเกินไปจะขยายสัญญาณรบกวนในสัญญาณอุณหภูมิที่มีอยู่สูงอยู่แล้ว',
        en: 'ZN intends roughly this overshoot, so the figures are a starting point to be adapted to the crop. Moving to ON–OFF solves nothing, since it swings continuously by design, and pushing \\( T_d \\) well past the rule amplifies the noise already present in a temperature signal.'
      }
    }
  ]
});
