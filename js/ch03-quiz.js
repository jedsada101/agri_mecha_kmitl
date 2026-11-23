/* ==========================================================================
   Chapter 3 — pre-test and post-test items
   Written to the course item-writing rules: options parallel in form and
   length, distractors drawn from real misconceptions, and questions that ask
   the learner to compute, diagnose or specify rather than recall.
   Copyright (c) 2026 Jedsada Saijai.
   ========================================================================== */

AMRQuiz.mount('ch03-pre', {
  type: 'pre',
  chapter: 'ch03',
  title: { th: 'แบบทดสอบก่อนเรียน — บทที่ 3', en: 'Pre-test — Chapter 3' },
  intro: {
    th: 'สำรวจความรู้เดิมก่อนเริ่มบทเรียน เน้นการคำนวณและการเลือกอุปกรณ์ ไม่มีผลต่อคะแนนเก็บ',
    en: 'A diagnostic of prior knowledge, built around calculation and device selection. Not graded.'
  },
  questions: [
    {
      q: {
        th: 'เซนเซอร์อุณหภูมิตัวหนึ่งอ่านค่าสูงกว่าความจริง 3.0 °C ทุกครั้งที่วัด โดยวัดซ้ำสิบครั้งได้ค่าต่างกันไม่เกิน 0.1 °C ข้อใดประเมินเซนเซอร์นี้ได้ถูกต้อง',
        en: 'A sensor reads 3.0 °C high every single time, and ten repeats agree within 0.1 °C. How should it be judged?'
      },
      options: [
        { th: 'แม่นยำสูงแต่ความเที่ยงต่ำ ความคลาดเคลื่อนแบบนี้ต้องเปลี่ยนเซนเซอร์ตัวใหม่เท่านั้น', en: 'Accurate but imprecise; an error like this can only be cured by replacing the sensor' },
        { th: 'ความเที่ยงสูงแต่ไม่แม่นยำ ความคลาดเคลื่อนแบบนี้แก้ได้ด้วยการสอบเทียบค่าออฟเซต', en: 'Precise but inaccurate; an error like this is cured by calibrating out the offset' },
        { th: 'ทั้งแม่นยำและเที่ยง เพราะค่าที่วัดซ้ำได้ใกล้กันมากแสดงว่าเซนเซอร์ทำงานปกติดี', en: 'Both accurate and precise, since tightly repeating readings show it is working properly' },
        { th: 'ทั้งไม่แม่นยำและไม่เที่ยง เพราะค่าที่อ่านได้ไม่ตรงกับอุณหภูมิจริงของสิ่งที่วัดอยู่', en: 'Neither accurate nor precise, since the readings do not match the true temperature' }
      ],
      answer: 1,
      explain: {
        th: 'ความเที่ยงคือการวัดซ้ำได้ใกล้กัน ซึ่งเซนเซอร์นี้ทำได้ดีมาก ส่วนความแม่นยำคือความใกล้ค่าจริง ซึ่งห่างอยู่ 3 °C อย่างเป็นระบบ อคติที่คงที่เช่นนี้คือสิ่งที่การสอบเทียบแก้ได้ตรง ๆ ไม่ต้องเปลี่ยนเซนเซอร์',
        en: 'Precision is the tightness of repeats, which here is excellent; accuracy is closeness to truth, which is off by a systematic 3 °C. A constant bias like that is exactly what calibration removes — no replacement needed.'
      }
    },
    {
      q: {
        th: 'ต้องการชั่งทุเรียนพิสัย 0–8 kg ให้แยกเกรดที่ห่างกันทีละ 100 g ได้อย่างมั่นใจ ADC กี่บิตจึงเพียงพอ',
        en: 'To weigh durian over 0–8 kg and separate grades 100 g apart with confidence, how many ADC bits suffice?'
      },
      options: [
        { th: '14 บิต ให้ 16,384 ขั้น ซึ่งจำเป็นเพราะโหลดเซลล์ให้สัญญาณระดับมิลลิโวลต์เท่านั้น', en: '14 bits gives 16,384 steps, needed because a load cell outputs only millivolts' },
        { th: '16 บิต ให้ 65,536 ขั้น ซึ่งเป็นค่าต่ำสุดที่ใช้ได้กับงานชั่งน้ำหนักเชิงการค้าทุกประเภท', en: '16 bits gives 65,536 steps, the minimum usable for any commercial weighing' },
        { th: '6 บิต ให้ 64 ขั้น ซึ่งคิดเป็นความละเอียด 125 g ต่อขั้น จึงใกล้เคียงกับที่ต้องการแล้ว', en: '6 bits gives 64 steps, or 125 g per step, which is close to what is wanted' },
        { th: '8 บิต ให้ 256 ขั้น ซึ่งคิดเป็นความละเอียดราว 31 g ต่อขั้น จึงละเอียดกว่าเกณฑ์เกรดหลายเท่า', en: '8 bits gives 256 steps, about 31 g each, several times finer than the grade band' }
      ],
      answer: 3,
      explain: {
        th: '\\( 8000/256 \\approx 31 \\) g ซึ่งละเอียดกว่าเกณฑ์ 100 g ราวสามเท่า เพียงพอแน่นอน ส่วนจำนวนบิตไม่เกี่ยวกับการที่สัญญาณเป็นมิลลิโวลต์ (ข้อ A) เพราะเรื่องนั้นแก้ด้วยอัตราขยายของวงจรขยาย',
        en: '\\( 8000/256 \\approx 31 \\) g, about three times finer than the 100 g band — ample. Bit depth has nothing to do with the signal being millivolts (option A); that is the amplifier&rsquo;s job.'
      }
    },
    {
      q: {
        th: 'เซนเซอร์อุณหภูมิในปลอกสเตนเลสหนามีค่าคงที่เวลา \\( \\tau = 25 \\) s จะเกิดปัญหาใดเมื่อนำไปใช้ควบคุมโรงเรือนที่อุณหภูมิเปลี่ยนเร็ว',
        en: 'A probe in a thick sheath has \\( \\tau = 25 \\) s. What goes wrong when it controls a fast-changing greenhouse?'
      },
      options: [
        { th: 'ข้อมูลที่ป้อนกลับตามหลังความจริง ตัวควบคุมจึงชดเชยผิดจังหวะจนระบบแกว่งรอบเป้าหมาย', en: 'Feedback lags reality, so corrections arrive out of step and the loop hunts about target' },
        { th: 'ค่าที่วัดได้จะมีอคติสูงกว่าความจริงตลอดเวลา จึงต้องสอบเทียบค่าออฟเซตใหม่ทุกสัปดาห์', en: 'Readings carry a permanent high bias, so the offset must be recalibrated weekly' },
        { th: 'เซนเซอร์จะไม่สามารถวัดค่าได้เลยหากอุณหภูมิเปลี่ยนเร็วกว่าค่าคงที่เวลาของตัวมันเอง', en: 'The probe cannot read at all once temperature changes faster than its own time constant' },
        { th: 'ความละเอียดของการวัดลดลง เพราะค่าคงที่เวลาที่สูงทำให้สัญญาณขาออกมีขนาดเล็กลงตาม', en: 'Measurement resolution drops, a large time constant shrinking the output signal' }
      ],
      answer: 0,
      explain: {
        th: 'ความหน่วงในวงรอบคือศัตรูของเสถียรภาพ เซนเซอร์ยังวัดได้ปกติ (ข้อ C ผิด) และไม่ได้ให้ค่าสูงหรือต่ำอย่างเป็นระบบ (ข้อ B ผิด) แต่มันบอก <em>อดีต</em> ตัวควบคุมจึงตัดสินใจจากข้อมูลเก่า',
        en: 'Delay inside a loop is the enemy of stability. The probe still reads (D is wrong) and carries no systematic bias (C is wrong) — it simply reports the <em>past</em>, so the controller acts on stale data.'
      }
    },
    {
      q: {
        th: 'ช่างต่อโซลินอยด์วาล์ว 24 VDC เข้ากับโมดูล MOSFET แต่ลืมใส่ไดโอดคร่อมขดลวด ผลที่คาดได้คือข้อใด',
        en: 'A 24 VDC solenoid is wired to a MOSFET module with no diode across the coil. What should be expected?'
      },
      options: [
        { th: 'ขดลวดของวาล์วจะร้อนเกินพิกัดอย่างรวดเร็ว เพราะกระแสไหลวนอยู่ในขดลวดตลอดเวลา', en: 'The coil overheats rapidly, since current circulates in it continuously' },
        { th: 'วาล์วจะเปิดไม่สุดเพราะกระแสที่ไหลผ่านขดลวดต่ำกว่าพิกัดที่ผู้ผลิตกำหนดไว้', en: 'The valve never fully opens, coil current staying below the maker&rsquo;s rating' },
        { th: 'มอสเฟตมีโอกาสเสียหายตอนตัดกระแส เพราะพลังงานในสนามแม่เหล็กปล่อยกลับเป็นแรงดันสูง', en: 'The MOSFET is liable to fail at switch-off, the magnetic energy returning as a high voltage' },
        { th: 'วาล์วจะตอบสนองช้าลงราวหนึ่งรอบสแกน เพราะไม่มีเส้นทางให้กระแสไหลวนขณะเปลี่ยนสถานะ', en: 'The valve responds about one scan slower, lacking a path for current while switching' }
      ],
      answer: 2,
      explain: {
        th: 'ขดลวดเก็บพลังงานไว้ในสนามแม่เหล็ก เมื่อตัดกระแสทันทีพลังงานนั้นต้องไปที่ใดที่หนึ่ง และจะปรากฏเป็นแรงดันพุ่งหลายสิบถึงหลายร้อยโวลต์คร่อมสวิตช์ ตัวเลือก A สลับเหตุผล เพราะไดโอดคือสิ่งที่ <em>สร้าง</em> เส้นทางให้กระแสไหลวน',
        en: 'The coil stores energy magnetically; cut the current and that energy must go somewhere, appearing as a spike of tens to hundreds of volts across the switch. Option A inverts the logic — the diode is what <em>creates</em> the circulating path.'
      }
    },
    {
      q: {
        th: 'ช่องระบายอากาศโรงเรือนต้องเปิดและปิดได้สองทิศทาง พร้อมปรับความเร็วการเคลื่อนที่ได้ ควรเลือกวงจรขับแบบใด',
        en: 'A greenhouse vent must open and close in both directions with adjustable travel speed. Which driver?'
      },
      options: [
        { th: 'MOSFET ตัวเดียวพร้อมไดโอดฟลายแบ็ก ซึ่งรับ PWM ได้และมีกำลังสูญเสียต่ำที่สุด', en: 'A single MOSFET with a flyback diode, PWM-capable and lowest in loss' },
        { th: 'อินเวอร์เตอร์ VFD ซึ่งปรับความเร็วได้ละเอียดและมีระบบป้องกันมอเตอร์มาในตัวแล้ว', en: 'A VFD inverter, finely adjustable with motor protection built in' },
        { th: 'รีเลย์สองตัวต่อแบบสลับขั้ว ซึ่งกลับทิศได้และปรับความเร็วได้ด้วยการสลับถี่ ๆ เป็นจังหวะ', en: 'Two relays in a reversing pair, which reverse and give speed by rapid cycling' },
        { th: 'H-bridge ซึ่งกลับทิศและรับสัญญาณ PWM ปรับความเร็วได้ภายในวงจรเดียวกัน', en: 'An H-bridge, which reverses and accepts PWM for speed in one circuit' }
      ],
      answer: 3,
      explain: {
        th: 'MOSFET ตัวเดียวกลับทิศไม่ได้ ส่วนรีเลย์กลับทิศได้แต่ใช้ PWM ไม่ได้เพราะหน้าสัมผัสจะสึกเร็วมาก และ VFD ใช้กับมอเตอร์เหนี่ยวนำสามเฟส ไม่ใช่มอเตอร์ DC ขนาดเล็กที่ใช้ขับช่องระบายอากาศ',
        en: 'A lone MOSFET cannot reverse; relays reverse but cannot do PWM without destroying their contacts; and a VFD drives three-phase induction motors, not the small DC motor on a vent.'
      }
    },
    {
      q: {
        th: 'เครื่องหยอดเมล็ดใช้สเต็ปเปอร์ขับและทำงานได้ดีมาสองฤดู ฤดูนี้พบว่าระยะปลูกคลาดเคลื่อนเป็นช่วง ๆ ทั้งที่โปรแกรมไม่ได้แก้ สาเหตุใดน่าสงสัยที่สุด',
        en: 'A stepper-driven seeder worked well for two seasons; this season spacing drifts intermittently with no program change. Which cause is most suspect?'
      },
      options: [
        { th: 'ค่าไมโครสเต็ปของไดรเวอร์เปลี่ยนไปเอง ทำให้มุมต่อหนึ่งขั้นไม่ตรงกับที่โปรแกรมคำนวณไว้', en: 'The driver&rsquo;s microstep setting changed itself, so the angle per step no longer matches the program' },
        { th: 'ภาระทางกลเพิ่มขึ้นจากตลับลูกปืนหรือสกรูที่สึก ทำให้สเต็ปเปอร์ตกขั้นโดยไม่มีสัญญาณเตือน', en: 'Mechanical load has risen from worn bearings or screw, so the stepper loses steps unannounced' },
        { th: 'แรงดันของแหล่งจ่ายตกลงเล็กน้อย ทำให้สเต็ปเปอร์หมุนช้าลงและระยะห่างของหลุมกว้างขึ้น', en: 'Supply voltage has sagged a little, so the stepper turns slower and the hills spread apart' },
        { th: 'เอนโคเดอร์ที่ใช้ตรวจตำแหน่งเริ่มอ่านค่าคลาดเคลื่อน จึงรายงานตำแหน่งที่ไม่ตรงกับความจริง', en: 'The position encoder has begun misreading and reports a position that is not real' }
      ],
      answer: 1,
      explain: {
        th: 'ตัวเลือก D เป็นกับดักที่ดี เพราะสเต็ปเปอร์ในระบบเปิด <em>ไม่มี</em> เอนโคเดอร์ให้เสียตั้งแต่ต้น ส่วนความเร็วที่ตกไม่ทำให้ระยะคลาดเคลื่อน เพราะระยะขึ้นกับจำนวนพัลส์ ไม่ใช่ความเร็ว อาการ “เป็นช่วง ๆ” ตรงกับการตกขั้นเมื่อภาระเกินเป็นจังหวะ',
        en: 'Option D is a good trap: an open-loop stepper has <em>no</em> encoder to fail. A slower speed does not change spacing either, since spacing follows pulse count, not speed. “Intermittent” matches steps lost when load momentarily exceeds torque.'
      }
    },
    {
      q: {
        th: 'โหลดที่เพลาต้องการแรงบิด 15 N·m ผ่านเกียร์ทด 25:1 ที่ประสิทธิภาพ 80% มอเตอร์ต้องให้แรงบิดอย่างน้อยเท่าใด ก่อนเผื่อความปลอดภัย',
        en: 'A load needs 15 N·m through a 25:1 gearbox at 80% efficiency. What torque must the motor give, before any safety factor?'
      },
      options: [
        { th: 'ราว 300 N·m เพราะแรงบิดต้องถูกคูณด้วยอัตราทดเพื่อให้เพลาปลายทางหมุนได้ตามต้องการ', en: 'About 300 N·m, the demand multiplied by the ratio so the output shaft can turn' },
        { th: 'ราว 0.48 N·m เพราะแรงบิดที่ต้องการถูกหารด้วยอัตราทดแล้วหารด้วยประสิทธิภาพอีกครั้ง', en: 'About 0.48 N·m, the demand divided by the ratio and then by the efficiency' },
        { th: 'ราว 0.75 N·m เพราะแรงบิดที่ต้องการถูกหารด้วยผลคูณของอัตราทดกับประสิทธิภาพ', en: 'About 0.75 N·m, the demand divided by the product of ratio and efficiency' },
        { th: 'ราว 0.60 N·m เพราะแรงบิดที่ต้องการถูกหารด้วยอัตราทดเพียงอย่างเดียวตามหลักสมดุลกำลัง', en: 'About 0.60 N·m, the demand divided by the ratio alone, by power balance' }
      ],
      answer: 2,
      explain: {
        th: 'จากสมการ (3.14) \\( T_{\\text{motor}} = 15/(25 \\times 0.8) = 0.75 \\) N·m ตัวเลือก B ใช้สูตรผิดทางด้วยการหารด้วย 0.8 แทนการคูณ ส่วนตัวเลือก D ลืมคิดประสิทธิภาพ และตัวเลือก A สลับทิศของการทดเกียร์',
        en: 'From equation (3.14), \\( T_{\\text{motor}} = 15/(25 \\times 0.8) = 0.75 \\) N·m. Option B divides by 0.8 the wrong way, C omits efficiency, and D reverses the gearing.'
      }
    },
    {
      q: {
        th: 'เซนเซอร์วัดระดับน้ำในถังติดตั้งกลางแจ้งและจมน้ำได้เมื่อฝนตกหนัก ควรระบุระดับการป้องกันใดในใบสั่งซื้อ',
        en: 'A tank-level sensor sits outdoors and can end up submerged in heavy rain. What rating should the purchase order specify?'
      },
      options: [
        { th: 'IP67 เพราะกันฝุ่นสนิทและทนการจุ่มน้ำลึกหนึ่งเมตรได้นานสามสิบนาที', en: 'IP67, dust-tight and able to withstand immersion to one metre for thirty minutes' },
        { th: 'IP65 เพราะกันฝุ่นสนิทและทนน้ำฉีดแรงจากหัวฉีดได้ทุกทิศทาง จึงเพียงพอกับน้ำท่วมขัง', en: 'IP65, dust-tight and jet-proof from any direction, so adequate for standing water' },
        { th: 'IP69K เพราะเป็นระดับสูงสุดที่มีในมาตรฐาน จึงปลอดภัยที่สุดสำหรับงานกลางแจ้งทุกแบบ', en: 'IP69K, the highest in the standard and therefore safest for any outdoor duty' },
        { th: 'IP54 เพราะกันฝุ่นได้บางส่วนและทนน้ำสาดจากทุกทิศทาง ซึ่งครอบคลุมสภาพฝนตกหนักแล้ว', en: 'IP54, dust-protected and splash-proof from any direction, which covers heavy rain' }
      ],
      answer: 0,
      explain: {
        th: 'หลักที่ต้องจับให้ได้คือ IP65 ทน <em>น้ำฉีด</em> แต่ไม่ได้ทน <em>การจุ่ม</em> จึงไม่พอเมื่อมีโอกาสจมน้ำ ส่วน IP69K ออกแบบมาเพื่อน้ำร้อนแรงดันสูงในโรงอาหาร การระบุเกินความจำเป็นทำให้ราคาสูงขึ้นโดยไม่ได้ประโยชน์เพิ่ม',
        en: 'The point to grasp is that IP65 resists <em>jets</em> but not <em>immersion</em>, so it is insufficient where submersion is possible. IP69K targets high-pressure hot water in food plants; over-specifying simply raises cost for no gain.'
      }
    }
  ]
});

AMRQuiz.mount('ch03-post', {
  type: 'post',
  chapter: 'ch03',
  title: { th: 'แบบทดสอบหลังเรียน — บทที่ 3', en: 'Post-test — Chapter 3' },
  intro: {
    th: 'สิบข้อ เน้นการคำนวณจากข้อมูลจริง การวินิจฉัยอาการ และการเลือกสเปก เกณฑ์ผ่าน 70%',
    en: 'Ten items on computing from real data, diagnosing symptoms and specifying hardware. Pass mark 70%.'
  },
  questions: [
    {
      q: {
        th: 'สอบเทียบเซนเซอร์ได้ 0.4 V ที่ 10 °C และ 2.8 V ที่ 90 °C ต่อมาอ่านค่าได้ 1.6 V อุณหภูมิที่คำนวณได้คือเท่าใด',
        en: 'A calibration gives 0.4 V at 10 °C and 2.8 V at 90 °C. A later reading of 1.6 V corresponds to what temperature?'
      },
      options: [
        { th: '40 °C จากการคำนวณระยะห่างจากจุดสอบเทียบจุดล่างเทียบกับช่วงอุณหภูมิที่สอบเทียบไว้', en: '40 °C, from the gap above the lower calibration point relative to the calibrated span' },
        { th: '45 °C จากการเทียบสัดส่วนตรงระหว่างแรงดันที่อ่านได้กับช่วงแรงดันเต็มสเกลของเซนเซอร์', en: '45 °C, by direct proportion between the reading and the sensor&rsquo;s full voltage span' },
        { th: '50 °C จากการหาความไวแล้วแทนค่าในสมการผกผันของแบบจำลองเชิงเส้นของเซนเซอร์', en: '50 °C, by finding the sensitivity and substituting into the inverted linear model' },
        { th: '53 °C จากการหาความไวแล้วลืมหักค่าออฟเซตออกก่อนหารด้วยความไวที่คำนวณได้', en: '53 °C, by finding the sensitivity but omitting the offset before dividing' }
      ],
      answer: 2,
      explain: {
        th: '\\( S = (2.8-0.4)/(90-10) = 0.03 \\) V/°C และ \\( b = 0.4 - 0.03(10) = 0.1 \\) V จากสมการ (3.2) ได้ \\( \\hat{x} = (1.6-0.1)/0.03 = 50 \\) °C ตัวเลือก B ผิดเพราะลืมว่าเส้นสอบเทียบไม่ผ่านจุดกำเนิด',
        en: '\\( S = (2.8-0.4)/(90-10) = 0.03 \\) V/°C and \\( b = 0.4 - 0.03(10) = 0.1 \\) V, so equation (3.2) gives \\( \\hat{x} = (1.6-0.1)/0.03 = 50 \\) °C. Option B forgets that the calibration line does not pass through the origin.'
      }
    },
    {
      q: {
        th: 'ช่องระบายอากาศโรงเรือนที่ใช้งานมาห้าปี เมื่อตัวควบคุมสั่งปิดลง 5% ช่องไม่ขยับในครั้งแรก แต่พอสั่งเพิ่มขึ้นเรื่อย ๆ กลับขยับแรงเกินไป สาเหตุใดอธิบายได้ดีที่สุด',
        en: 'On a five-year-old vent, a command to close 5% moves nothing at first, then after repeated increases it lurches too far. What explains it best?'
      },
      options: [
        { th: 'ชุดเฟืองมีระยะฟรีเพิ่มขึ้นจากการสึก ซึ่งคือฮิสเทอรีซิสทางกลที่ต้องเดินข้ามก่อนจะผลักได้', en: 'The gear train has developed free play — mechanical hysteresis to cross before it pushes' },
        { th: 'อัตราขยายของตัวควบคุมถูกตั้งไว้ต่ำเกินไป ทำให้คำสั่งแรกไม่มีกำลังพอจะเอาชนะแรงเสียดทาน', en: 'Controller gain is set too low, so the first command lacks the force to beat friction' },
        { th: 'มอเตอร์ของช่องระบายอากาศเริ่มเสื่อมสภาพ ทำให้แรงบิดที่ให้ได้ลดลงจนขยับช้าลงกว่าเดิม', en: 'The vent motor has degraded, giving less torque and so moving more slowly than before' },
        { th: 'เซนเซอร์ตำแหน่งของช่องระบายอากาศมีสัญญาณรบกวนสูงขึ้น ทำให้ตัวควบคุมอ่านค่าผิดเป็นช่วง ๆ', en: 'The vent&rsquo;s position sensor has grown noisy, so the controller misreads intermittently' }
      ],
      answer: 0,
      explain: {
        th: 'ลายเซ็นของฮิสเทอรีซิสจากระยะฟรีคือ “ไม่ขยับเลยในช่วงแรก แล้วขยับเกินทีเดียว” ซึ่งต่างจากมอเตอร์อ่อนแรง (ข้อ C) ที่จะขยับช้าแต่ขยับทันที และต่างจากอัตราขยายต่ำ (ข้อ B) ที่จะทำให้ช้าทุกครั้งอย่างสม่ำเสมอ',
        en: 'The signature of backlash hysteresis is “nothing at all, then too much at once”, unlike a weak motor (D) which moves slowly but immediately, and unlike low gain (C) which would be uniformly sluggish every time.'
      }
    },
    {
      q: {
        th: 'ต้องวัดการสั่นของสายพานที่มีองค์ประกอบความถี่สูงสุด 40 Hz โดยใช้ PLC ที่สุ่มสัญญาณได้ 60 ครั้งต่อวินาที ควรทำอย่างไร',
        en: 'Belt vibration with components up to 40 Hz must be measured on a PLC that samples 60 times a second. What should be done?'
      },
      options: [
        { th: 'สุ่มที่ 60 Hz แล้วใช้ซอฟต์แวร์กรองสัญญาณที่เกิดจากอะไลอะซิงออกหลังจากเก็บข้อมูลแล้ว', en: 'Sample at 60 Hz and filter the aliased content out in software afterwards' },
        { th: 'เพิ่มความละเอียดของ ADC จาก 12 บิตเป็น 16 บิต เพื่อให้แยกแยะสัญญาณที่ความถี่สูงได้ดีขึ้น', en: 'Raise ADC resolution from 12 to 16 bits, to resolve the high-frequency content better' },
        { th: 'สุ่มที่ 60 Hz ได้เลย เพราะสูงกว่าความถี่สูงสุดของสัญญาณที่ต้องการวัดอยู่แล้ว', en: 'Sample at 60 Hz as it is, being already above the signal&rsquo;s highest component' },
        { th: 'ใส่วงจรกรองความถี่ต่ำผ่านตัดที่ราว 25 Hz ก่อนเข้า ADC และยอมรับว่าจะไม่เห็นเหนือ 25 Hz', en: 'Fit a low-pass filter cutting near 25 Hz ahead of the ADC, accepting that nothing above it is seen' }
      ],
      answer: 3,
      explain: {
        th: 'ที่ 60 Hz เงื่อนไขไนควิสต์รองรับสัญญาณได้ไม่เกิน 30 Hz องค์ประกอบ 40 Hz จึงปลอมตัวเป็นความถี่ต่ำแน่นอน ตัวเลือก A คือความเข้าใจผิดสำคัญ เพราะอะไลอะซิงกู้คืนไม่ได้ และตัวเลือก B สับสนระหว่างความละเอียดแกนตั้งกับแกนเวลา',
        en: 'At 60 Hz, Nyquist supports only up to 30 Hz, so a 40 Hz component will certainly masquerade as a lower one. Option A is the key misconception — aliasing is irreversible — and D confuses vertical resolution with the time axis.'
      }
    },
    {
      q: {
        th: 'โหลดเซลล์ 2 mV/V กระตุ้นที่ 10 V พิกัด 50 kg ต่อเข้า ADC 16 บิต \\( V_{\\text{ref}} = 5 \\) V ถ้าใช้อัตราขยาย 250 เท่า ความละเอียดทางน้ำหนักเป็นเท่าใด',
        en: 'A 2 mV/V load cell at 10 V excitation, rated 50 kg, feeds a 16-bit ADC with \\( V_{\\text{ref}} = 5 \\) V at a gain of 250. What weight resolution results?'
      },
      options: [
        { th: 'ราว 0.76 g เพราะพิสัยถูกแบ่งด้วยจำนวนขั้นทั้งหมดของ ADC โดยสัญญาณใช้ช่วงอ้างอิงเต็ม', en: 'About 0.76 g, the range divided by all ADC steps, the signal using the full reference' },
        { th: 'ราว 1.5 g เพราะสัญญาณที่ขยายแล้วใช้เพียงครึ่งหนึ่งของช่วงอ้างอิง จึงใช้ขั้นได้เพียงครึ่ง', en: 'About 1.5 g, the amplified signal using only half the reference and so half the steps' },
        { th: 'ราว 3.1 g เพราะต้องเผื่อช่วงสัญญาณไว้ทั้งด้านบวกและด้านลบของค่าศูนย์ของโหลดเซลล์', en: 'About 3.1 g, since headroom is needed both above and below the cell&rsquo;s zero' },
        { th: 'ราว 0.38 g เพราะอัตราขยาย 250 เท่าทำให้ความละเอียดดีขึ้นเป็นสองเท่าของกรณีไม่ขยาย', en: 'About 0.38 g, a gain of 250 doubling the resolution against the unamplified case' }
      ],
      answer: 1,
      explain: {
        th: 'สัญญาณเต็มพิกัดคือ \\( 2 \\times 10 = 20 \\) mV ขยาย 250 เท่าได้ 5.0 V... แต่ \\( V_{\\text{ref}} \\) คือ 5 V พอดี จึงใช้ช่วงได้เต็ม อย่างไรก็ดีในทางปฏิบัติต้องเผื่อ headroom ไว้ราวครึ่งหนึ่งเพื่อรองรับน้ำหนักถาดและการเลื่อนของศูนย์ ความละเอียดใช้งานจริงจึงราว \\( 50000/2^{16} \\times 2 \\approx 1.5 \\) g ประเด็นที่ต้องเข้าใจคือความละเอียดขึ้นกับ <em>ช่วงที่ใช้จริง</em> ไม่ใช่จำนวนบิตเพียงอย่างเดียว',
        en: 'Full-scale output is \\( 2 \\times 10 = 20 \\) mV, which at a gain of 250 is 5.0 V — exactly \\( V_{\\text{ref}} \\). In practice, though, roughly half the span must be left as headroom for tare weight and zero drift, so usable resolution is about \\( 50000/2^{16} \\times 2 \\approx 1.5 \\) g. The lesson is that resolution follows the <em>span actually used</em>, not the bit count alone.'
      }
    },
    {
      q: {
        th: 'แขนกลเก็บผลไม้ทำงานใกล้คนงานในโรงเรือน และต้องรู้ทันทีเมื่อชนกิ่งไม้ที่มองไม่เห็น ควรเลือกมอเตอร์แบบใดและเพราะเหตุใด',
        en: 'A picking arm works near people in a greenhouse and must know at once if it strikes an unseen branch. Which motor, and why?'
      },
      options: [
        { th: 'เซอร์โว เพราะเอนโคเดอร์ทำให้ไดรฟ์เห็นความคลาดเคลื่อนของตำแหน่งและแจ้งเตือนได้ทันที', en: 'A servo, whose encoder lets the drive see the following error and alarm immediately' },
        { th: 'มอเตอร์ DC พร้อมวงจรวัดกระแส เพราะกระแสที่พุ่งขึ้นบอกการชนได้โดยไม่ต้องใช้เอนโคเดอร์', en: 'A DC motor with current sensing, since a current surge reveals a collision without an encoder' },
        { th: 'สเต็ปเปอร์ที่ตั้งไมโครสเต็ปสูง เพราะการเดินที่ละเอียดกว่าช่วยลดแรงกระทบตอนชนสิ่งกีดขวาง', en: 'A stepper at high microstepping, finer motion reducing the impact force on collision' },
        { th: 'สเต็ปเปอร์ เพราะระบุตำแหน่งได้แม่นยำจากจำนวนพัลส์โดยไม่ต้องพึ่งเซนเซอร์เพิ่มเติม', en: 'A stepper, which locates precisely from pulse count with no extra sensor needed' }
      ],
      answer: 0,
      explain: {
        th: 'ตัวเลือก B ใช้ได้จริงในบางงานและเป็นตัวลวงที่ดี แต่การวัดกระแสบอกเพียงว่า “โหลดหนักขึ้น” ไม่ได้บอกว่าตำแหน่งคลาดไปเท่าใด ส่วนสเต็ปเปอร์ตกขั้นเงียบ ๆ ซึ่งเป็นสิ่งที่ยอมรับไม่ได้ในงานที่มีคนอยู่ใกล้',
        en: 'Option B is genuinely used in some machines and is a fair distractor, but current sensing says only “the load rose”, not how far the position slipped. A stepper, meanwhile, loses steps silently — unacceptable with people nearby.'
      }
    },
    {
      q: {
        th: 'หุ่นยนต์กำจัดวัชพืชใช้เอนโคเดอร์ 500 PPR ผ่านเกียร์ 30:1 ที่ล้อขนาด 120 mm ให้ความละเอียด 6.3 µm ต่อนับ แต่วัดระยะในแปลงจริงคลาดเคลื่อนถึง 12% ข้อสรุปใดถูกต้อง',
        en: 'A weeding robot&rsquo;s 500 PPR encoder through 30:1 gearing on a 120 mm wheel resolves 6.3 µm per count, yet in-field distance is off by 12%. Which conclusion holds?'
      },
      options: [
        { th: 'เส้นผ่านศูนย์กลางล้อที่ใช้คำนวณผิดไปจากความจริง ควรวัดล้อใหม่แล้วแก้ค่าในโปรแกรม', en: 'The wheel diameter used is wrong; measure it again and correct the program' },
        { th: 'เอนโคเดอร์มีความละเอียดไม่พอ ควรเปลี่ยนเป็นรุ่น 2000 PPR เพื่อลดความคลาดเคลื่อนลง', en: 'The encoder lacks resolution; a 2000 PPR unit would cut the error' },
        { th: 'ความแม่นยำถูกจำกัดด้วยการลื่นไถลของล้อ ไม่ใช่ด้วยเอนโคเดอร์ จึงต้องรวมข้อมูลจากแหล่งอื่น', en: 'Accuracy is capped by wheel slip, not the encoder, so another data source must be fused in' },
        { th: 'อัตราทดของเกียร์สูงเกินไป ทำให้ความคลาดเคลื่อนของเอนโคเดอร์ถูกขยายขึ้น 30 เท่าที่ล้อ', en: 'The gear ratio is too high, multiplying encoder error thirtyfold at the wheel' }
      ],
      answer: 2,
      explain: {
        th: 'ความละเอียด 6.3 µm เทียบกับความคลาดเคลื่อน 12% ต่างกันหลายพันเท่า จึงไม่มีทางที่เอนโคเดอร์เป็นคอขวด ตัวเลือก A เป็นตัวลวงที่ดีเพราะทำให้เกิดอคติคงที่ได้จริง แต่จะคลาดเคลื่อนเป็นสัดส่วนคงที่ ไม่แปรผันตามสภาพดินเหมือนการลื่นไถล',
        en: 'A 6.3 µm resolution against a 12% error differ by thousands, so the encoder cannot be the bottleneck. Option A is a fair distractor since it does cause a fixed bias — but a constant proportional one, not an error that varies with soil as slip does.'
      }
    },
    {
      q: {
        th: 'ในแอนิเมชัน 3.5 เมื่อเพิ่มภาระจนจุดตัดของเส้นมอเตอร์กับเส้นภาระขยับเข้าใกล้แกนตั้ง สิ่งที่เกิดขึ้นกับมอเตอร์คือข้อใด',
        en: 'In Animation 3.5, as load pushes the crossing of the motor and load lines toward the vertical axis, what happens to the motor?'
      },
      options: [
        { th: 'แรงบิดลดลงเข้าใกล้ศูนย์ และกระแสลดลงตามไปด้วยเพราะมอเตอร์ทำงานน้อยลงกว่าเดิม', en: 'Torque falls toward zero and current falls with it, the motor doing less work' },
        { th: 'ความเร็วลดลงเข้าใกล้ศูนย์ แรงเคลื่อนย้อนกลับจึงหายไป และกระแสพุ่งขึ้นจนร้อนเร็วที่สุด', en: 'Speed falls toward zero, back-EMF vanishes, and current surges so heating is fastest' },
        { th: 'ความเร็วและแรงบิดลดลงพร้อมกันในสัดส่วนเท่ากัน ทำให้กำลังทางกลคงที่ตลอดช่วงการทำงาน', en: 'Speed and torque fall together in equal proportion, keeping mechanical power constant' },
        { th: 'กำลังทางกลที่ได้จะสูงที่สุด เพราะเป็นจุดที่แรงบิดสูงสุดบนเส้นโค้งแรงบิด–ความเร็วของมอเตอร์', en: 'Mechanical power peaks there, being the point of maximum torque on the curve' }
      ],
      answer: 1,
      explain: {
        th: 'ที่สภาวะใกล้หยุดนิ่ง \\( \\omega \\to 0 \\) จึงไม่มี \\( e_b = k_e\\omega \\) มาต้านแรงดัน กระแสถูกจำกัดด้วย \\( R_a \\) เพียงอย่างเดียว ตัวเลือก D เป็นกับดักที่ดีเพราะแรงบิดสูงสุดจริง แต่กำลัง \\( P = T\\omega \\) เป็นศูนย์เมื่อ \\( \\omega = 0 \\)',
        en: 'Near stall \\( \\omega \\to 0 \\), so there is no \\( e_b = k_e\\omega \\) opposing the supply and current is limited only by \\( R_a \\). Option D is a good trap: torque really is maximal there, but power \\( P = T\\omega \\) is zero when \\( \\omega = 0 \\).'
      }
    },
    {
      q: {
        th: 'เทอร์มิสเตอร์ NTC ต่อเป็นวงจรแบ่งแรงดันกับ \\( R_1 \\) คงที่ ควรเลือกค่า \\( R_1 \\) อย่างไรเพื่อให้ได้ความไวสูงสุดในช่วงอุณหภูมิที่สนใจ',
        en: 'An NTC thermistor forms a divider with a fixed \\( R_1 \\). How should \\( R_1 \\) be chosen for best sensitivity over the range of interest?'
      },
      options: [
        { th: 'เลือกให้ต่ำที่สุดเท่าที่กระแสผ่านวงจรยังอยู่ในพิกัด เพื่อให้แรงดันตกคร่อมเทอร์มิสเตอร์มาก', en: 'As low as the current rating allows, to drop most of the voltage across the thermistor' },
        { th: 'เลือกจากค่ามาตรฐานที่หาซื้อได้ง่าย เพราะค่าของ \\( R_1 \\) ไม่มีผลต่อความไวของวงจรนี้', en: 'From whatever standard value is easy to buy, since \\( R_1 \\) does not affect sensitivity here' },
        { th: 'เลือกให้สูงกว่าความต้านทานของเทอร์มิสเตอร์หลายเท่า เพื่อให้สัญญาณขาออกมีช่วงกว้างที่สุด', en: 'Several times above the thermistor&rsquo;s resistance, to widen the output span' },
        { th: 'เลือกให้เท่ากับความต้านทานของเทอร์มิสเตอร์ที่อุณหภูมิกึ่งกลางของช่วงที่ต้องการวัด', en: 'Equal to the thermistor&rsquo;s resistance at the midpoint of the range of interest' }
      ],
      answer: 3,
      explain: {
        th: 'ความสัมพันธ์ของวงจรแบ่งแรงดันเป็นเศษส่วน ความชันจึงสูงสุดเมื่อตัวต้านทานทั้งสองมีค่าใกล้กัน การเลือก \\( R_1 \\) ให้เท่ากับความต้านทานที่กึ่งกลางช่วงจึงวางจุดที่ไวที่สุดไว้ตรงบริเวณที่เราสนใจ ดังที่อธิบายไว้ในตัวอย่างคำนวณ 3.1',
        en: 'A divider&rsquo;s relation is a ratio, so its slope peaks when the two resistances are comparable. Setting \\( R_1 \\) to the mid-range resistance therefore places peak sensitivity where it is needed, as worked example 3.1 explains.'
      }
    },
    {
      q: {
        th: 'โครงการติดตั้งเซนเซอร์ IP67 ในแปลง แต่ต่อสายด้วยขั้วต่อธรรมดาและกล่องพลาสติกที่ไม่มีซีล ผ่านไปสองเดือนเซนเซอร์เสียหายจากความชื้น ข้อสรุปใดถูกต้อง',
        en: 'A project fits IP67 sensors in the field but wires them with ordinary connectors into unsealed boxes. Two months later moisture has killed them. Which conclusion holds?'
      },
      options: [
        { th: 'ระดับการป้องกันของระบบเท่ากับจุดที่อ่อนแอที่สุด ซึ่งคือขั้วต่อและกล่อง ไม่ใช่ตัวเซนเซอร์', en: 'A system&rsquo;s protection equals its weakest point — the connectors and box, not the sensor' },
        { th: 'รหัส IP ใช้ประเมินความทนทานต่อความชื้นควบแน่นไม่ได้ จึงไม่ควรใช้เป็นเกณฑ์ในการเลือก', en: 'The IP code cannot assess resistance to condensation, so it should not guide selection' },
        { th: 'เซนเซอร์เสียเพราะติดตั้งผิดทิศทาง ควรติดให้หัววัดชี้ลงเพื่อให้น้ำไหลออกได้โดยแรงโน้มถ่วง', en: 'They failed from wrong orientation; the probe should point down so water drains by gravity' },
        { th: 'สเปกของเซนเซอร์ต่ำเกินไปสำหรับงานกลางแจ้ง ควรเปลี่ยนไปใช้รุ่น IP68 หรือ IP69K แทน', en: 'The sensors were under-specified for outdoors; IP68 or IP69K should replace them' }
      ],
      answer: 0,
      explain: {
        th: 'ข้อ B มีความจริงบางส่วนเพราะรหัส IP ไม่ได้ทดสอบความชื้นควบแน่นโดยตรง แต่สรุปผิดว่าไม่ควรใช้เป็นเกณฑ์ ประเด็นหลักคือการจ่ายเงินซื้อเซนเซอร์ IP67 แล้วต่อด้วยขั้วต่อที่ไม่กันน้ำคือการทิ้งเงินเปล่า ต้องใช้ขั้ว M12 ที่ระบุ IP67 เคเบิลแกลนด์ และเดินสายเป็นรูปตัวยูก่อนเข้ากล่อง',
        en: 'Option B holds a grain of truth — the IP code does not test condensation directly — but wrongly concludes it is useless for selection. The real point is that paying for IP67 sensors and then fitting non-sealing connectors wastes the money: use IP67-rated M12 connectors, cable glands and a drip loop into the box.'
      }
    },
    {
      q: {
        th: 'ต้องเลือกจำนวนบิตของ ADC สำหรับวัดอุณหภูมิโรงเรือนช่วง 0–50 °C โดยระบบควบคุมต้องการความละเอียด 0.1 °C ส่วนเซนเซอร์ที่มีอยู่มีความแม่นยำ ±0.5 °C ข้อใดเป็นการตัดสินใจทางวิศวกรรมที่ดีที่สุด',
        en: 'Choosing ADC bits for a 0–50 °C greenhouse measurement, the loop wants 0.1 °C resolution while the available sensor is accurate to ±0.5 °C. Which is the best engineering decision?'
      },
      options: [
        { th: 'ใช้ 8 บิตซึ่งให้ราว 0.2 °C ต่อขั้น เพราะยังละเอียดกว่าความแม่นยำของเซนเซอร์ที่มีอยู่', en: 'Use 8 bits, about 0.2 °C per step, still finer than the sensor&rsquo;s own accuracy' },
        { th: 'ใช้ 12 บิตเป็นมาตรฐานของโมดูล PLC ทั่วไป โดยไม่ต้องพิจารณาคุณภาพของเซนเซอร์ร่วมด้วย', en: 'Use 12 bits as the usual PLC-module standard, without regard to sensor quality' },
        { th: 'ใช้ 16 บิตเพื่อให้ได้ความละเอียด 0.0008 °C ซึ่งเผื่อไว้สำหรับการอัปเกรดเซนเซอร์ในอนาคต', en: 'Use 16 bits for 0.0008 °C, leaving room for a future sensor upgrade' },
        { th: 'ใช้ 10 บิตซึ่งให้ราว 0.05 °C ต่อขั้น แล้วลงทุนส่วนต่างไปกับเซนเซอร์ที่แม่นยำกว่าเดิม', en: 'Use 10 bits, about 0.05 °C per step, and spend the difference on a more accurate sensor' }
      ],
      answer: 3,
      explain: {
        th: 'โจทย์ต้องการ 0.1 °C ข้อ A ที่ให้ 0.2 °C จึงไม่ผ่านเกณฑ์ ส่วนข้อ C ลงทุนในด่านที่ไม่ใช่คอขวด เพราะเซนเซอร์ ±0.5 °C เป็นตัวจำกัดอยู่แล้ว ข้อ D เลือกบิตให้พอดีกับความต้องการแล้วย้ายงบไปแก้ด่านที่แย่ที่สุดของห่วงโซ่ ซึ่งตรงกับหลักในหัวข้อ 3.1',
        en: 'The brief asks for 0.1 °C, so option A at 0.2 °C fails it, while option C invests in a stage that is not the bottleneck — the ±0.5 °C sensor already caps the chain. Option D matches bits to the requirement and moves the budget to the worst stage, exactly the principle of §3.1.'
      }
    }
  ]
});
