/* ==========================================================================
   Chapter 2 — pre-test and post-test items
   Copyright (c) 2026 Jedsada Saijai.
   ========================================================================== */

AMRQuiz.mount('ch02-pre', {
  type: 'pre',
  chapter: 'ch02',
  title: { th: 'แบบทดสอบก่อนเรียน — บทที่ 2', en: 'Pre-test — Chapter 2' },
  intro: { th: 'สำรวจความรู้เดิมก่อนเริ่มบทเรียน ไม่มีผลต่อคะแนนเก็บ', en: 'A diagnostic of prior knowledge. Not graded.' },
  questions: [
    {
      q: { th: 'ข้อใดคือความแตกต่างระหว่างระบบควบคุมแบบเปิดกับแบบปิด', en: 'What distinguishes an open-loop from a closed-loop control system?' },
      options: [
        { th: 'ระบบปิดใช้ไฟฟ้า ส่วนระบบเปิดใช้กลไก', en: 'Closed loops are electrical, open loops mechanical' },
        { th: 'ระบบปิดมีการส่งค่าที่วัดได้กลับมาเปรียบเทียบกับค่าที่ต้องการ', en: 'A closed loop feeds the measured output back for comparison with the setpoint' },
        { th: 'ระบบเปิดทำงานเร็วกว่าเสมอ', en: 'Open loops are always faster' },
        { th: 'ระบบปิดไม่จำเป็นต้องมีแอคชูเอเตอร์', en: 'A closed loop needs no actuator' }
      ],
      answer: 1,
      explain: {
        th: 'ความต่างทั้งหมดอยู่ที่เส้นป้อนกลับเพียงเส้นเดียว ถ้าไม่มีเส้นนี้ ระบบจะไม่มีทางรู้ผลลัพธ์จริง',
        en: 'The whole difference is one feedback line. Without it the system can never learn its true output.'
      }
    },
    {
      q: { th: 'ในระบบให้น้ำที่ควบคุมด้วยความชื้นดิน อะไรคือ manipulated variable (MV)', en: 'In moisture-based irrigation, which is the manipulated variable (MV)?' },
      options: [
        { th: 'ความชื้นดิน', en: 'Soil moisture' },
        { th: 'เวลาเปิดวาล์วน้ำ', en: 'Valve open time' },
        { th: 'ปริมาณน้ำฝน', en: 'Rainfall' },
        { th: 'ค่าเป้าหมาย 60 %VWC', en: 'The 60 %VWC target' }
      ],
      answer: 1,
      explain: {
        th: 'MV คือสิ่งที่คอนโทรลเลอร์ปรับได้โดยตรง ส่วนความชื้นดินคือ PV และ 60 %VWC คือ SP',
        en: 'The MV is what the controller can move directly; soil moisture is the PV and 60 %VWC the SP.'
      }
    },
    {
      q: { th: 'การควบคุม “ลำดับ” (sequence control) เหมาะกับงานแบบใดมากที่สุด', en: 'Sequence control is best suited to which kind of task?' },
      options: [
        { th: 'รักษาอุณหภูมิให้คงที่ที่ 28 °C', en: 'Holding a temperature steady at 28 °C' },
        { th: 'สั่งให้เครื่องทำงานเป็นขั้นตอน ลำเลียง → เติม → ปิดผนึก → ส่งออก', en: 'Driving a machine through convey → fill → seal → eject' },
        { th: 'ปรับความเร็วพัดลมให้แปรผันตามความชื้น', en: 'Varying fan speed with humidity' },
        { th: 'คุมค่า EC ของสารละลายธาตุอาหาร', en: 'Regulating nutrient solution EC' }
      ],
      answer: 1,
      explain: {
        th: 'การควบคุมลำดับจัดการกับสถานะไม่ต่อเนื่องและเงื่อนไขการเปลี่ยนขั้น ส่วนอีกสามข้อเป็นค่าต่อเนื่อง',
        en: 'Sequence control handles discrete states and transition conditions; the other three are continuous quantities.'
      }
    },
    {
      q: { th: 'เครื่องตั้งเวลารดน้ำ 20 นาทีทุกเช้า จัดเป็นระบบแบบใด', en: 'A timer that waters for 20 minutes every morning is which kind of system?' },
      options: [
        { th: 'ระบบปิด เพราะมีการตั้งค่าเป้าหมาย', en: 'Closed loop, because a target is set' },
        { th: 'ระบบเปิด เพราะไม่ได้วัดผลลัพธ์กลับมา', en: 'Open loop, because the result is never measured' },
        { th: 'ระบบป้อนไปข้างหน้า เพราะทำงานล่วงหน้า', en: 'Feedforward, because it acts in advance' },
        { th: 'ไม่จัดเป็นระบบควบคุม', en: 'Not a control system at all' }
      ],
      answer: 1,
      explain: {
        th: 'ไม่มีเซนเซอร์วัดความชื้นดินส่งกลับ ระบบจึงไม่รู้ว่าฝนตกหรือแดดจัด นี่คือระบบเปิดโดยนิยาม',
        en: 'No moisture sensor reports back, so the system cannot tell rain from drought. That is an open loop by definition.'
      }
    },
    {
      q: { th: '“สิ่งรบกวน” (disturbance) ในโรงเรือนปลูกพืชคือข้อใด', en: 'Which of these is a disturbance in a greenhouse?' },
      options: [
        { th: 'ค่าอุณหภูมิเป้าหมายที่ผู้ใช้ตั้งไว้', en: 'The temperature target set by the operator' },
        { th: 'ความเข้มแสงอาทิตย์ที่เปลี่ยนไปเมื่อเมฆบัง', en: 'Solar radiation changing as clouds pass' },
        { th: 'สัญญาณที่ส่งไปยังพัดลม', en: 'The signal sent to the fan' },
        { th: 'ค่าที่อ่านได้จากเซนเซอร์', en: 'The sensor reading' }
      ],
      answer: 1,
      explain: {
        th: 'สิ่งรบกวนคือสิ่งที่กระทบผลลัพธ์แต่เราไม่ได้สั่งและควบคุมไม่ได้ เช่น แสงอาทิตย์ ลม ฝน',
        en: 'A disturbance affects the output but is neither commanded nor controllable — sun, wind, rain.'
      }
    },
    {
      q: { th: 'ถ้าอัตราขยายวงรอบ (loop gain) ของระบบป้อนกลับมีค่า 9 ผลของสิ่งรบกวนจะเหลือประมาณเท่าใด', en: 'If the loop gain of a feedback system is 9, roughly how much of a disturbance survives?' },
      options: [
        { th: '90% ของค่าเดิม', en: '90% of it' },
        { th: '50% ของค่าเดิม', en: '50% of it' },
        { th: '10% ของค่าเดิม', en: '10% of it' },
        { th: 'ไม่เหลือเลย', en: 'None of it' }
      ],
      answer: 2,
      explain: {
        th: 'ผลของสิ่งรบกวนถูกหารด้วย 1 + loop gain = 10 จึงเหลือประมาณ 10%',
        en: 'The effect is divided by 1 + loop gain = 10, leaving about 10%.'
      }
    },
    {
      q: { th: 'ข้อเสียที่แท้จริงของการเพิ่มอัตราขยายให้สูงมากในระบบจริงคืออะไร', en: 'What is the genuine drawback of pushing the gain very high in a real system?' },
      options: [
        { th: 'ความคลาดเคลื่อนสถานะคงตัวจะเพิ่มขึ้น', en: 'Steady-state error increases' },
        { th: 'ระบบอาจแกว่งและไม่เสถียร', en: 'The system may oscillate and become unstable' },
        { th: 'เซนเซอร์จะหยุดทำงาน', en: 'The sensor stops working' },
        { th: 'ระบบจะกลายเป็นระบบเปิด', en: 'The loop turns into an open loop' }
      ],
      answer: 1,
      explain: {
        th: 'ในระบบที่มีความหน่วงเวลา การแก้ไขที่แรงเกินไปจะมาถึงช้าและกลายเป็นการซ้ำเติม ทำให้เกิดการแกว่ง',
        en: 'With time lags, an over-strong correction arrives late and reinforces the error, producing oscillation.'
      }
    },
    {
      q: { th: 'การควบคุมแบบป้อนไปข้างหน้า (feedforward) ต่างจากการป้อนกลับอย่างไร', en: 'How does feedforward differ from feedback?' },
      options: [
        { th: 'ป้อนไปข้างหน้าวัดสิ่งรบกวนโดยตรงและชดเชยก่อนที่ผลลัพธ์จะเปลี่ยน', en: 'Feedforward measures the disturbance directly and compensates before the output changes' },
        { th: 'ป้อนไปข้างหน้าไม่ต้องใช้เซนเซอร์ใด ๆ เลย', en: 'Feedforward needs no sensors at all' },
        { th: 'ป้อนไปข้างหน้าใช้ได้เฉพาะกับระบบดิจิทัล', en: 'Feedforward works only on digital systems' },
        { th: 'ป้อนไปข้างหน้าแม่นยำกว่าเสมอ', en: 'Feedforward is always more accurate' }
      ],
      answer: 0,
      explain: {
        th: 'ป้อนกลับต้องรอให้เกิดความคลาดเคลื่อนก่อน ส่วนป้อนไปข้างหน้าลงมือทันทีที่ตรวจพบสิ่งรบกวน แต่ต้องพึ่งแบบจำลองที่แม่นยำ',
        en: 'Feedback must wait for an error to appear; feedforward acts the moment the disturbance is detected, but depends on an accurate model.'
      }
    }
  ]
});

AMRQuiz.mount('ch02-post', {
  type: 'post',
  chapter: 'ch02',
  title: { th: 'แบบทดสอบหลังเรียน — บทที่ 2', en: 'Post-test — Chapter 2' },
  intro: { th: 'ทดสอบความเข้าใจหลังเรียน 10 ข้อ เกณฑ์ผ่าน 70%', en: 'Ten items on the chapter content. Pass mark 70%.' },
  questions: [
    {
      q: { th: 'ระบบป้อนกลับที่มี \\( K = 2 \\) และ \\( K_p = 4 \\) จะลดผลของสิ่งรบกวนลงกี่เท่า', en: 'A feedback loop with \\( K = 2 \\) and \\( K_p = 4 \\) divides a disturbance by what factor?' },
      options: [
        { th: '6 เท่า', en: '6' },
        { th: '8 เท่า', en: '8' },
        { th: '9 เท่า', en: '9' },
        { th: '2 เท่า', en: '2' }
      ],
      answer: 2,
      explain: {
        th: 'ตัวประกอบคือ \\( 1 + K K_p = 1 + (2)(4) = 9 \\) ตามสมการ (2.4)',
        en: 'The factor is \\( 1 + K K_p = 1 + (2)(4) = 9 \\), from equation (2.4).'
      }
    },
    {
      q: { th: 'ระบบเปิดที่มีสิ่งรบกวน d = −6 °C จะมีความคลาดเคลื่อนสถานะคงตัวเท่าใด', en: 'An open loop hit by a disturbance d = −6 °C ends up with what steady-state error?' },
      options: [
        { th: '0 °C เพราะไม่มีการป้อนกลับจึงไม่มีความคลาดเคลื่อน', en: '0 °C, since with no feedback there is no error' },
        { th: '6 °C เต็มขนาดของสิ่งรบกวน', en: '6 °C — the full size of the disturbance' },
        { th: '3 °C คือครึ่งหนึ่งของสิ่งรบกวน', en: '3 °C — half the disturbance' },
        { th: 'ขึ้นกับค่า \\( K_p \\) ที่เลือกใช้', en: 'It depends on the chosen \\( K_p \\)' }
      ],
      answer: 1,
      explain: {
        th: 'สมการ (2.1) ให้ \\( e_{\\text{ol}} = -d \\) ระบบเปิดไม่มีกลไกใดมาลดทอนสิ่งรบกวน และไม่มี \\( K_p \\) ให้ปรับ',
        en: 'Equation (2.1) gives \\( e_{\\text{ol}} = -d \\). An open loop has no mechanism to attenuate a disturbance, and no \\( K_p \\) to tune.'
      }
    },
    {
      q: { th: 'เครื่องคัดขนาดมะม่วงที่ใช้ลิมิตสวิตช์และกระบอกลมผลักผลไม้ลงราง จัดเป็นการควบคุมชนิดใด', en: 'A mango grader using limit switches and air cylinders to push fruit into chutes is what kind of control?' },
      options: [
        { th: 'การควบคุมกระบวนการแบบต่อเนื่อง', en: 'Continuous process control' },
        { th: 'การควบคุมลำดับ', en: 'Sequence control' },
        { th: 'การควบคุมแบบป้อนไปข้างหน้าเท่านั้น', en: 'Feedforward control only' },
        { th: 'ไม่ใช่ระบบควบคุม', en: 'Not control at all' }
      ],
      answer: 1,
      explain: {
        th: 'ตัวแปรทั้งหมดเป็นค่าไม่ต่อเนื่อง (ถึง/ไม่ถึง, ดัน/ไม่ดัน) และคำถามคือจะไปขั้นตอนถัดไปเมื่อใด',
        en: 'Every variable is discrete (reached/not, push/no push) and the question is when to advance a step.'
      }
    },
    {
      q: { th: 'ข้อใดเรียงลำดับชื่อสัญญาณรอบวงรอบปิดได้ถูกต้อง', en: 'Which sequence names the signals around a closed loop correctly?' },
      options: [
        { th: '\\( r \\to e \\to u \\to y \\to y_m \\)', en: '\\( r \\to e \\to u \\to y \\to y_m \\)' },
        { th: '\\( e \\to r \\to y \\to u \\to y_m \\)', en: '\\( e \\to r \\to y \\to u \\to y_m \\)' },
        { th: '\\( u \\to r \\to e \\to y_m \\to y \\)', en: '\\( u \\to r \\to e \\to y_m \\to y \\)' },
        { th: '\\( y \\to u \\to e \\to r \\to y_m \\)', en: '\\( y \\to u \\to e \\to r \\to y_m \\)' }
      ],
      answer: 0,
      explain: {
        th: 'ค่าที่ต้องการเข้าจุดเปรียบเทียบได้ \\( e \\) ผ่านตัวควบคุมได้ \\( u \\) ผ่านกระบวนการได้ \\( y \\) แล้วผ่านเซนเซอร์กลับมาเป็น \\( y_m \\)',
        en: 'The setpoint enters the comparator to give \\( e \\), the controller gives \\( u \\), the process gives \\( y \\), and the sensor returns \\( y_m \\).'
      }
    },
    {
      q: { th: 'ในโรงเรือนที่ติดเซนเซอร์วัดความเข้มแสงไว้ภายนอกเพื่อสั่งเปิดช่องระบายอากาศล่วงหน้า เรียกว่าอะไร', en: 'A greenhouse with an outdoor radiation sensor that opens the vents in advance is using what?' },
      options: [
        { th: 'การป้อนกลับเชิงลบ', en: 'Negative feedback' },
        { th: 'การป้อนไปข้างหน้า', en: 'Feedforward' },
        { th: 'ระบบเปิดล้วน', en: 'Pure open loop' },
        { th: 'การควบคุมลำดับ', en: 'Sequence control' }
      ],
      answer: 1,
      explain: {
        th: 'เป็นการวัดสิ่งรบกวนโดยตรงและชดเชยก่อนที่อุณหภูมิภายในจะเปลี่ยน ตามสมการ (2.5)',
        en: 'It measures the disturbance directly and compensates before the inside temperature moves — equation (2.5).'
      }
    },
    {
      q: { th: 'เหตุใดระบบปิดจึงทนต่อการที่หัวน้ำหยดอุดตันบางส่วนได้ดีกว่าระบบเปิด', en: 'Why does a closed loop cope better than an open loop when drip emitters partially clog?' },
      options: [
        { th: 'เพราะระบบปิดใช้แรงดันน้ำสูงกว่า', en: 'Because it runs at higher water pressure' },
        { th: 'เพราะระบบปิดวัดผลลัพธ์จริงจึงยืดเวลาเปิดวาล์วชดเชยให้เอง', en: 'Because it measures the real outcome and lengthens valve time to compensate' },
        { th: 'เพราะระบบปิดไม่ต้องใช้เซนเซอร์', en: 'Because it needs no sensor' },
        { th: 'เพราะการอุดตันไม่ถือเป็นสิ่งรบกวน', en: 'Because clogging is not a disturbance' }
      ],
      answer: 1,
      explain: {
        th: 'การอุดตันทำให้อัตราขยายของกระบวนการเปลี่ยน ระบบปิดตรวจพบผ่านค่าที่วัดได้และแก้ไขเอง ส่วนระบบเปิดยังสั่งเวลาเดิมต่อไป',
        en: 'Clogging changes the process gain. A closed loop sees it in the measurement and self-corrects; an open loop keeps issuing the old command.'
      }
    },
    {
      q: { th: 'ในแอนิเมชัน 2.2 เมื่อเพิ่ม \\( K_p \\) จาก 3 เป็น 8 ความคลาดเคลื่อนของระบบปิดเปลี่ยนไปอย่างไร', en: 'In Animation 2.2, raising \\( K_p \\) from 3 to 8 changes the closed-loop error how?' },
      options: [
        { th: 'เพิ่มขึ้นประมาณสองเท่า', en: 'It roughly doubles' },
        { th: 'ลดลงเพราะตัวหาร \\( 1 + K K_p \\) มีค่ามากขึ้น', en: 'It shrinks, because the divisor \\( 1 + K K_p \\) grows' },
        { th: 'ไม่เปลี่ยนแปลง', en: 'It does not change' },
        { th: 'กลายเป็นศูนย์พอดี', en: 'It becomes exactly zero' }
      ],
      answer: 1,
      explain: {
        th: 'ที่ \\( K = 1 \\) ตัวหารเปลี่ยนจาก 4 เป็น 9 ความคลาดเคลื่อนจึงลดลงประมาณ 2.25 เท่า แต่ไม่มีทางเป็นศูนย์ด้วยตัวควบคุมสัดส่วนล้วน',
        en: 'With \\( K = 1 \\) the divisor goes from 4 to 9, so the error shrinks about 2.25-fold — but pure proportional control never reaches zero.'
      }
    },
    {
      q: { th: 'ข้อใดเป็นเหตุผลที่สมเหตุสมผลในการเลือกใช้ระบบเปิด', en: 'Which is a legitimate reason to choose an open-loop scheme?' },
      options: [
        { th: 'สิ่งรบกวนมีขนาดใหญ่และเปลี่ยนตลอดเวลา', en: 'Disturbances are large and constantly changing' },
        { th: 'ไม่มีเซนเซอร์ที่วัดผลลัพธ์ที่ต้องการได้ในราคาที่คุ้มค่า', en: 'No affordable sensor can measure the outcome we care about' },
        { th: 'ต้องการความแม่นยำสูงมาก', en: 'Very high accuracy is required' },
        { th: 'ตัวระบบเปลี่ยนคุณสมบัติไปตามเวลา', en: 'The plant drifts over time' }
      ],
      answer: 1,
      explain: {
        th: 'ถ้าวัดผลลัพธ์ไม่ได้ ก็ปิดวงรอบไม่ได้ ส่วนอีกสามข้อล้วนเป็นเหตุผลที่บังคับให้ต้องใช้ระบบปิด',
        en: 'If you cannot measure the outcome you cannot close the loop. The other three are precisely the reasons to close it.'
      }
    },
    {
      q: { th: 'ค่า PV ของระบบควบคุม EC ในการปลูกพืชไร้ดินคือข้อใด', en: 'In a hydroponic EC control system, what is the PV?' },
      options: [
        { th: 'ค่าเป้าหมาย 1.8 mS/cm', en: 'The 1.8 mS/cm target' },
        { th: 'ค่าการนำไฟฟ้าที่วัดได้จริงจากสารละลาย', en: 'The conductivity actually measured in the solution' },
        { th: 'อัตราการจ่ายของปั๊มสารเข้มข้น', en: 'The dosing pump rate' },
        { th: 'อัตราการดูดใช้ธาตุอาหารของพืช', en: 'The crop uptake rate' }
      ],
      answer: 1,
      explain: {
        th: '1.8 mS/cm คือ SP, ปั๊มคือ MV, การดูดใช้ของพืชคือ disturbance ส่วนค่าที่วัดได้จริงคือ PV',
        en: '1.8 mS/cm is the SP, the pump is the MV, crop uptake is the disturbance, and the measured value is the PV.'
      }
    },
    {
      q: { th: 'ข้อความใดถูกต้องเกี่ยวกับความสัมพันธ์ระหว่างการควบคุมลำดับกับการควบคุมกระบวนการ', en: 'Which statement about sequence and process control is correct?' },
      options: [
        { th: 'เครื่องจักรหนึ่งเครื่องใช้ได้เพียงแบบใดแบบหนึ่งเท่านั้น', en: 'One machine can only ever use one of the two' },
        { th: 'เครื่องจักรจริงมักมีทั้งสองแบบทำงานร่วมกัน เช่น โรงคัดบรรจุที่มีสายพานและห้องเย็น', en: 'Real machines routinely use both — a packhouse has conveyors and a cold room' },
        { th: 'การควบคุมลำดับเป็นรุ่นที่ล้าสมัยของการควบคุมกระบวนการ', en: 'Sequence control is an obsolete form of process control' },
        { th: 'การควบคุมกระบวนการใช้ได้เฉพาะในโรงงานเท่านั้น', en: 'Process control only applies inside factories' }
      ],
      answer: 1,
      explain: {
        th: 'ทั้งสองเป็นเครื่องมือคนละชุดสำหรับโจทย์คนละแบบ และมักอยู่ในเครื่องจักรเดียวกัน วิศวกรจึงต้องเชี่ยวชาญทั้งคู่',
        en: 'They are different toolsets for different problems and usually coexist in one machine, so an engineer needs both.'
      }
    }
  ]
});
