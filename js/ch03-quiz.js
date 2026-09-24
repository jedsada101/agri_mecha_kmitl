/* ==========================================================================
   Chapter 3 — pre-test and post-test items
   Copyright (c) 2026 Jedsada Saijai.
   ========================================================================== */

AMRQuiz.mount('ch03-pre', {
  type: 'pre',
  chapter: 'ch03',
  title: { th: 'แบบทดสอบก่อนเรียน — บทที่ 3', en: 'Pre-test — Chapter 3' },
  intro: { th: 'สำรวจความรู้เดิมก่อนเริ่มบทเรียน ไม่มีผลต่อคะแนนเก็บ', en: 'A diagnostic of prior knowledge. Not graded.' },
  questions: [
    {
      q: { th: '“ความแม่นยำ” (accuracy) ต่างจาก “ความเที่ยง” (precision) อย่างไร', en: 'How does accuracy differ from precision?' },
      options: [
        { th: 'เป็นคำเดียวกัน ใช้แทนกันได้', en: 'They are the same thing' },
        { th: 'ความแม่นยำคือใกล้ค่าจริง ส่วนความเที่ยงคือวัดซ้ำแล้วได้ค่าใกล้กัน', en: 'Accuracy is closeness to the true value; precision is repeatability' },
        { th: 'ความแม่นยำใช้กับเซนเซอร์ดิจิทัล ความเที่ยงใช้กับอนาล็อก', en: 'Accuracy applies to digital sensors, precision to analogue ones' },
        { th: 'ความเที่ยงคือจำนวนบิตของ ADC', en: 'Precision means the number of ADC bits' }
      ],
      answer: 1,
      explain: {
        th: 'เซนเซอร์อาจเที่ยงมากแต่ไม่แม่นเลย เช่น อ่านสูงเกินจริง 3 °C ทุกครั้ง ซึ่งกรณีนี้แก้ได้ด้วยการสอบเทียบ',
        en: 'A sensor can be very precise yet inaccurate — reading 3 °C high every single time. That case is curable by calibration.'
      }
    },
    {
      q: { th: 'ADC ขนาด 10 บิต ที่มีแรงดันอ้างอิง 5 V มีความละเอียดประมาณเท่าใด', en: 'What is the resolution of a 10-bit ADC with a 5 V reference?' },
      options: [
        { th: 'ประมาณ 0.5 V', en: 'about 0.5 V' },
        { th: 'ประมาณ 4.9 mV', en: 'about 4.9 mV' },
        { th: 'ประมาณ 10 mV', en: 'about 10 mV' },
        { th: 'ประมาณ 50 mV', en: 'about 50 mV' }
      ],
      answer: 1,
      explain: {
        th: '\\( \\Delta V = 5/2^{10} = 5/1024 \\approx 4.9 \\) mV ตามสมการ (3.7)',
        en: '\\( \\Delta V = 5/2^{10} = 5/1024 \\approx 4.9 \\) mV, from equation (3.7).'
      }
    },
    {
      q: { th: 'เหตุใดสัญญาณมาตรฐาน 4–20 mA จึงเริ่มที่ 4 mA แทนที่จะเป็น 0 mA', en: 'Why does the 4–20 mA standard start at 4 mA rather than 0 mA?' },
      options: [
        { th: 'เพื่อให้แยกได้ว่าค่าต่ำสุดจริง ๆ ต่างจากสายขาดหรือไฟดับ', en: 'So a genuine lowest reading can be told apart from a broken wire or lost power' },
        { th: 'เพื่อประหยัดพลังงาน', en: 'To save energy' },
        { th: 'เพราะเซนเซอร์ไม่สามารถสร้างกระแส 0 mA ได้', en: 'Because sensors cannot produce 0 mA' },
        { th: 'เพื่อให้เข้ากับแรงดัน 24 V', en: 'To match a 24 V supply' }
      ],
      answer: 0,
      explain: {
        th: 'คุณสมบัตินี้เรียกว่า live zero ถ้าอ่านได้ 0 mA แปลว่าระบบมีปัญหา ไม่ใช่ว่าค่าที่วัดต่ำสุด',
        en: 'This is the live-zero property: a reading of 0 mA means something is broken, not that the measurement is at its minimum.'
      }
    },
    {
      q: { th: 'เหตุใดจึงต้องต่อไดโอดคร่อมขดลวดของรีเลย์หรือโซลินอยด์', en: 'Why must a diode be fitted across a relay or solenoid coil?' },
      options: [
        { th: 'เพื่อเพิ่มแรงบิด', en: 'To increase torque' },
        { th: 'เพื่อระบายพลังงานในสนามแม่เหล็กตอนตัดกระแส ไม่ให้เกิดแรงดันสูงทำลายทรานซิสเตอร์', en: 'To dissipate the magnetic field energy at switch-off so the voltage spike does not destroy the transistor' },
        { th: 'เพื่อลดการใช้กระแส', en: 'To reduce current draw' },
        { th: 'เพื่อให้ขดลวดทำงานเร็วขึ้น', en: 'To make the coil act faster' }
      ],
      answer: 1,
      explain: {
        th: 'ขดลวดเก็บพลังงานไว้ในสนามแม่เหล็ก เมื่อตัดกระแสทันทีจะเกิดแรงดันย้อนกลับหลายสิบถึงหลายร้อยโวลต์',
        en: 'The coil stores energy magnetically; cutting the current abruptly produces a reverse spike of tens to hundreds of volts.'
      }
    },
    {
      q: { th: 'ในระบบ PWM ที่แรงดันแหล่งจ่าย 12 V และดิวตี้ไซเคิล 25% แรงดันเฉลี่ยที่โหลดได้รับคือเท่าใด', en: 'With a 12 V supply and a 25% duty cycle, what average voltage reaches the load?' },
      options: [
        { th: '12 V', en: '12 V' },
        { th: '6 V', en: '6 V' },
        { th: '3 V', en: '3 V' },
        { th: '48 V', en: '48 V' }
      ],
      answer: 2,
      explain: {
        th: '\\( V_{\\text{avg}} = D V_s = 0.25 \\times 12 = 3 \\) V ตามสมการ (3.13)',
        en: '\\( V_{\\text{avg}} = D V_s = 0.25 \\times 12 = 3 \\) V, equation (3.13).'
      }
    },
    {
      q: { th: 'ข้อใดเป็นจุดอ่อนสำคัญที่สุดของมอเตอร์สเต็ปเปอร์', en: 'What is the most important weakness of a stepper motor?' },
      options: [
        { th: 'หมุนได้ทิศทางเดียว', en: 'It turns in one direction only' },
        { th: 'ตกขั้นได้เมื่อภาระเกิน โดยไม่มีสัญญาณเตือน', en: 'It can lose steps under overload without any warning' },
        { th: 'ใช้กับไฟกระแสสลับไม่ได้', en: 'It cannot run on AC' },
        { th: 'ไม่สามารถหยุดค้างตำแหน่งได้', en: 'It cannot hold a position' }
      ],
      answer: 1,
      explain: {
        th: 'ตัวควบคุมยังนับพัลส์ต่อไปและเชื่อว่าอยู่ถูกตำแหน่ง ทั้งที่กลไกเคลื่อนไปไม่ถึง ต่างจากเซอร์โวที่มีเอนโคเดอร์ตรวจจับได้',
        en: 'The controller keeps counting pulses and believes it is on target while the mechanism has fallen behind. A servo with an encoder detects this.'
      }
    },
    {
      q: { th: 'ถ้าเซนเซอร์อุณหภูมิมีค่าคงที่เวลา \\( \\tau = 20 \\) s จะใช้เวลาประมาณเท่าใดจึงจะเข้าที่หลังอุณหภูมิเปลี่ยนกะทันหัน', en: 'If a temperature sensor has \\( \\tau = 20 \\) s, roughly how long until it settles after a step change?' },
      options: [
        { th: 'ประมาณ 20 วินาที', en: 'about 20 s' },
        { th: 'ประมาณ 100 วินาที', en: 'about 100 s' },
        { th: 'ประมาณ 5 วินาที', en: 'about 5 s' },
        { th: 'ทันที', en: 'immediately' }
      ],
      answer: 1,
      explain: {
        th: 'ระบบอันดับหนึ่งใช้เวลาราว \\( 5\\tau \\) จึงเข้าสู่สถานะคงตัว ที่ \\( \\tau \\) เพียงหนึ่งเท่าจะไปถึงแค่ 63.2% ของการเปลี่ยนแปลง',
        en: 'A first-order system needs roughly \\( 5\\tau \\) to settle; one \\( \\tau \\) covers only 63.2% of the change.'
      }
    },
    {
      q: { th: 'อุปกรณ์ที่ติดตั้งกลางแจ้งในแปลงเกษตรและต้องโดนฝน ควรมีระดับการป้องกันอย่างน้อยเท่าใด', en: 'Equipment installed outdoors in a field and exposed to rain should carry at least what rating?' },
      options: [
        { th: 'IP20', en: 'IP20' },
        { th: 'IP44', en: 'IP44' },
        { th: 'IP65', en: 'IP65' },
        { th: 'ไม่จำเป็นต้องระบุ', en: 'No rating is needed' }
      ],
      answer: 2,
      explain: {
        th: 'IP65 กันฝุ่นได้สมบูรณ์และกันน้ำฉีดจากทุกทิศทาง ถือเป็นขั้นต่ำของอุปกรณ์นอกตู้ควบคุมในงานเกษตร',
        en: 'IP65 is dust-tight and withstands water jets from any direction — the practical minimum outside a cabinet on a farm.'
      }
    }
  ]
});

AMRQuiz.mount('ch03-post', {
  type: 'post',
  chapter: 'ch03',
  title: { th: 'แบบทดสอบหลังเรียน — บทที่ 3', en: 'Post-test — Chapter 3' },
  intro: { th: 'ทดสอบความเข้าใจหลังเรียน 10 ข้อ เกณฑ์ผ่าน 70%', en: 'Ten items on the chapter content. Pass mark 70%.' },
  questions: [
    {
      q: { th: 'เซนเซอร์ตัวหนึ่งให้สัญญาณ 0.5 V ที่ 0 °C และ 2.5 V ที่ 100 °C ความไว \\( S \\) มีค่าเท่าใด', en: 'A sensor gives 0.5 V at 0 °C and 2.5 V at 100 °C. What is its sensitivity \\( S \\)?' },
      options: [
        { th: '0.025 V/°C', en: '0.025 V/°C' },
        { th: '0.020 V/°C', en: '0.020 V/°C' },
        { th: '0.005 V/°C', en: '0.005 V/°C' },
        { th: '2.0 V/°C', en: '2.0 V/°C' }
      ],
      answer: 1,
      explain: {
        th: '\\( S = \\Delta v / \\Delta x = (2.5-0.5)/(100-0) = 0.020 \\) V/°C และออฟเซต \\( b = 0.5 \\) V',
        en: '\\( S = \\Delta v / \\Delta x = (2.5-0.5)/(100-0) = 0.020 \\) V/°C, with offset \\( b = 0.5 \\) V.'
      }
    },
    {
      q: { th: 'จากเซนเซอร์ในข้อก่อนหน้า ถ้าอ่านได้ 1.7 V อุณหภูมิเป็นเท่าใด', en: 'Using that same sensor, a reading of 1.7 V corresponds to what temperature?' },
      options: [
        { th: '85 °C', en: '85 °C' },
        { th: '60 °C', en: '60 °C' },
        { th: '68 °C', en: '68 °C' },
        { th: '34 °C', en: '34 °C' }
      ],
      answer: 1,
      explain: {
        th: 'ใช้สมการ (3.2): \\( \\hat{x} = (v-b)/S = (1.7-0.5)/0.020 = 60 \\) °C',
        en: 'By equation (3.2): \\( \\hat{x} = (v-b)/S = (1.7-0.5)/0.020 = 60 \\) °C.'
      }
    },
    {
      q: { th: 'ความคลาดเคลื่อนประเภทใดที่การสอบเทียบด้วยเส้นตรงเส้นเดียวแก้ไม่ได้', en: 'Which kind of error cannot be removed by fitting a single straight calibration line?' },
      options: [
        { th: 'ออฟเซตคงที่', en: 'A constant offset' },
        { th: 'ความชันที่ผิดไปจากสเปก', en: 'A slope that differs from specification' },
        { th: 'ฮิสเทอรีซิส', en: 'Hysteresis' },
        { th: 'หน่วยที่แปลงผิด', en: 'A unit conversion mistake' }
      ],
      answer: 2,
      explain: {
        th: 'ฮิสเทอรีซิสทำให้ค่าที่อ่านได้ขึ้นกับทิศทางที่เข้าหาจุดวัด เส้นสอบเทียบเส้นเดียวจึงอธิบายไม่ได้ทั้งขาขึ้นและขาลง',
        en: 'Hysteresis makes the reading depend on the direction of approach, so one line cannot describe both the rising and falling paths.'
      }
    },
    {
      q: { th: 'ต้องการชั่งเมล็ดพันธุ์ช่วง 0–2 kg ให้ละเอียดถึง 0.5 g ต้องใช้ ADC อย่างน้อยกี่บิต', en: 'To weigh seed over 0–2 kg to a resolution of 0.5 g, how many ADC bits are needed at minimum?' },
      options: [
        { th: '8 บิต', en: '8 bits' },
        { th: '10 บิต', en: '10 bits' },
        { th: '12 บิต', en: '12 bits' },
        { th: '6 บิต', en: '6 bits' }
      ],
      answer: 2,
      explain: {
        th: 'ต้องการ \\( 2000/0.5 = 4000 \\) ขั้น ซึ่ง \\( 2^{11} = 2048 \\) ยังไม่พอ ต้องใช้ \\( 2^{12} = 4096 \\) จึงพอดี',
        en: 'You need \\( 2000/0.5 = 4000 \\) steps. \\( 2^{11} = 2048 \\) falls short, so \\( 2^{12} = 4096 \\) is the minimum.'
      }
    },
    {
      q: { th: 'สัญญาณที่มีความถี่สูงสุด 5 Hz ต้องสุ่มด้วยอัตราอย่างน้อยเท่าใดจึงจะไม่เกิดอะไลอะซิง', en: 'A signal whose highest component is 5 Hz must be sampled at least how fast to avoid aliasing?' },
      options: [
        { th: 'มากกว่า 2.5 Hz', en: 'faster than 2.5 Hz' },
        { th: 'มากกว่า 5 Hz', en: 'faster than 5 Hz' },
        { th: 'มากกว่า 10 Hz', en: 'faster than 10 Hz' },
        { th: 'มากกว่า 50 Hz', en: 'faster than 50 Hz' }
      ],
      answer: 2,
      explain: {
        th: 'เงื่อนไขไนควิสต์ในสมการ (3.9) คือ \\( f_s > 2 f_{\\max} = 10 \\) Hz และในทางปฏิบัติมักเลือกสูงกว่านั้นหลายเท่า',
        en: 'Nyquist, equation (3.9), requires \\( f_s > 2 f_{\\max} = 10 \\) Hz — and in practice one usually picks several times that.'
      }
    },
    {
      q: { th: 'ช่องระบายอากาศโรงเรือนต้องเปิด–ปิดได้สองทิศทางและปรับความเร็วได้ ควรใช้วงจรขับแบบใด', en: 'A greenhouse vent must open and close in both directions with adjustable speed. Which driver suits it?' },
      options: [
        { th: 'รีเลย์ตัวเดียว', en: 'A single relay' },
        { th: 'MOSFET ตัวเดียว', en: 'A single MOSFET' },
        { th: 'H-bridge', en: 'An H-bridge' },
        { th: 'ต่อมอเตอร์เข้าขาคอนโทรลเลอร์โดยตรง', en: 'The controller pin, wired directly to the motor' }
      ],
      answer: 2,
      explain: {
        th: 'H-bridge กลับทิศทางและใช้ PWM ปรับความเร็วได้ในวงจรเดียว ส่วน MOSFET ตัวเดียวกลับทิศไม่ได้ และรีเลย์ใช้ PWM ไม่ได้',
        en: 'An H-bridge reverses direction and accepts PWM in one circuit; a lone MOSFET cannot reverse, and a relay cannot do PWM.'
      }
    },
    {
      q: { th: 'ภาระที่เพลาต้องการแรงบิด 12 N·m ผ่านเกียร์ทด 20:1 ที่ประสิทธิภาพ 80% มอเตอร์ต้องให้แรงบิดเท่าใด', en: 'A load needs 12 N·m through a 20:1 gearbox at 80% efficiency. What torque must the motor supply?' },
      options: [
        { th: '0.75 N·m', en: '0.75 N·m' },
        { th: '0.60 N·m', en: '0.60 N·m' },
        { th: '9.6 N·m', en: '9.6 N·m' },
        { th: '240 N·m', en: '240 N·m' }
      ],
      answer: 0,
      explain: {
        th: 'จากสมการ (3.14): \\( T_{\\text{motor}} = 12/(20 \\times 0.8) = 0.75 \\) N·m และควรเผื่อความปลอดภัยเพิ่มอีก',
        en: 'From equation (3.14): \\( T_{\\text{motor}} = 12/(20 \\times 0.8) = 0.75 \\) N·m — before adding a safety factor.'
      }
    },
    {
      q: { th: 'เหตุใดเซนเซอร์อุณหภูมิที่มีค่า \\( \\tau \\) สูงจึงเป็นปัญหาต่อระบบควบคุมแบบปิด', en: 'Why does a temperature sensor with a large \\( \\tau \\) trouble a closed-loop system?' },
      options: [
        { th: 'เพราะทำให้ความละเอียดของ ADC ลดลง', en: 'Because it lowers the ADC resolution' },
        { th: 'เพราะข้อมูลที่ป้อนกลับช้ากว่าความจริง การแก้ไขจึงมาผิดจังหวะจนระบบแกว่ง', en: 'Because the feedback lags reality, so corrections arrive out of step and the loop hunts' },
        { th: 'เพราะทำให้สิ้นเปลืองพลังงานมากขึ้น', en: 'Because it consumes more power' },
        { th: 'เพราะเปลี่ยนระบบปิดให้เป็นระบบเปิด', en: 'Because it converts a closed loop into an open one' }
      ],
      answer: 1,
      explain: {
        th: 'ความหน่วงในวงรอบคือศัตรูของเสถียรภาพ ตัวควบคุมตัดสินใจจากข้อมูลเก่า จึงชดเชยมากเกินไปแล้วต้องแก้กลับ',
        en: 'Delay inside a loop is the enemy of stability: the controller acts on stale data, over-corrects, then must correct back.'
      }
    },
    {
      q: { th: 'งานควบคุมลำดับของเครื่องคัดบรรจุที่ต้องเดินเครื่องทั้งวันและช่างในพื้นที่ต้องซ่อมได้ ควรเลือกคอนโทรลเลอร์ใด', en: 'For packhouse sequence control that runs all day and must be serviceable by local technicians, which controller fits?' },
      options: [
        { th: 'Raspberry Pi', en: 'A Raspberry Pi' },
        { th: 'PLC', en: 'A PLC' },
        { th: 'ไมโครคอนโทรลเลอร์บนเบรดบอร์ด', en: 'A microcontroller on a breadboard' },
        { th: 'คอมพิวเตอร์โน้ตบุ๊ก', en: 'A laptop computer' }
      ],
      answer: 1,
      explain: {
        th: 'PLC ออกแบบมาเพื่อสภาพแวดล้อมอุตสาหกรรม มีรอบสแกนคงที่ และใช้ภาษามาตรฐาน IEC 61131-3 ที่ช่างคุ้นเคย',
        en: 'A PLC is built for industrial conditions, runs a fixed scan cycle, and uses the IEC 61131-3 languages technicians already know.'
      }
    },
    {
      q: { th: 'ในแอนิเมชัน 3.5 เมื่อเพิ่มภาระจนจุดตัดขยับเข้าใกล้แกนตั้ง เกิดอะไรขึ้นกับมอเตอร์', en: 'In Animation 3.5, as the load pushes the crossing toward the vertical axis, what happens to the motor?' },
      options: [
        { th: 'ความเร็วเพิ่มขึ้นและกระแสลดลง', en: 'It speeds up and draws less current' },
        { th: 'เข้าใกล้สภาวะหยุดนิ่ง กระแสสูงสุดและร้อนเร็วที่สุด', en: 'It approaches stall, where current peaks and heating is fastest' },
        { th: 'แรงบิดลดลงจนเป็นศูนย์', en: 'Its torque falls to zero' },
        { th: 'ไม่มีการเปลี่ยนแปลง', en: 'Nothing changes' }
      ],
      answer: 1,
      explain: {
        th: 'ที่สภาวะหยุดนิ่งไม่มีแรงเคลื่อนย้อนกลับมาต้านแรงดัน กระแสจึงถูกจำกัดด้วยความต้านทานขดลวดเพียงอย่างเดียว ตามสมการ (3.10)',
        en: 'At stall there is no back-EMF to oppose the supply, so current is limited only by armature resistance — equation (3.10).'
      }
    }
  ]
});
