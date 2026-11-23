/* ==========================================================================
   Chapter 6 — pre-test and post-test items
   Written to the course item-writing rules: options parallel in form and
   length, distractors drawn from real misconceptions, and questions that ask
   the learner to read a curve, compute from parameters or interpret them
   physically rather than recall a definition.
   Copyright (c) 2026 Jedsada Saijai.
   ========================================================================== */

AMRQuiz.mount('ch06-pre', {
  type: 'pre',
  chapter: 'ch06',
  title: { th: 'แบบทดสอบก่อนเรียน — บทที่ 6', en: 'Pre-test — Chapter 6' },
  intro: {
    th: 'สำรวจความรู้เดิมก่อนเริ่มบทเรียน เน้นการตีความกราฟและการให้เหตุผลเชิงกายภาพ ไม่มีผลต่อคะแนนเก็บ',
    en: 'A diagnostic of prior knowledge, built around reading curves and physical reasoning. Not graded.'
  },
  questions: [
    {
      q: {
        th: 'คำถามใดต่อไปนี้ที่ตอบไม่ได้เลยหากรู้เพียงอัตราขยายของกระบวนการ แต่ไม่มีแบบจำลองเชิงพลวัต',
        en: 'Which question is unanswerable from the process gain alone, without a dynamic model?'
      },
      options: [
        { th: 'เมื่อระบบนิ่งแล้ว อุณหภูมิจะสูงกว่าภายนอกกี่องศาต่อกำลังฮีตเตอร์หนึ่งกิโลวัตต์', en: 'Once settled, how many degrees above outside will each kilowatt of heater give?' },
        { th: 'หลังเพิ่มกำลังฮีตเตอร์แล้ว ต้องรอนานเท่าใดจึงจะถึงอุณหภูมิที่ต้องการ', en: 'After raising the heater, how long must one wait to reach the wanted temperature?' },
        { th: 'ถ้าอุณหภูมิภายนอกลดลง 5 องศา อุณหภูมิภายในที่สถานะคงตัวจะเปลี่ยนไปเท่าใด', en: 'If the outside drops five degrees, how far does the settled inside temperature move?' },
        { th: 'ต้องใช้ฮีตเตอร์กำลังเท่าใดจึงจะรักษาอุณหภูมิไว้ที่ 28 องศาในคืนที่หนาวที่สุด', en: 'What heater power holds 28 degrees on the coldest night of the year?' }
      ],
      answer: 1,
      explain: {
        th: 'อีกสามข้อเป็นคำถามเกี่ยวกับ <em>สถานะคงตัว</em> ซึ่งอัตราขยายตอบได้หมด ส่วนคำถามเรื่องเวลาต้องใช้ค่าคงที่เวลา ซึ่งเป็นสิ่งที่แบบจำลองเชิงพลวัตเท่านั้นที่ให้ได้',
        en: 'The other three are <em>steady-state</em> questions, all answerable from the gain. Only the question about time needs a time constant, which is what a dynamic model supplies.'
      }
    },
    {
      q: {
        th: 'วงรอบหนึ่งมีตัวควบคุม \\( C \\) ต่ออนุกรมกับกระบวนการ \\( G \\) และมีเซนเซอร์ \\( H \\) อยู่ในเส้นทางป้อนกลับ ฟังก์ชันถ่ายโอนจาก \\( R \\) ไป \\( Y \\) คือข้อใด',
        en: 'A loop has controller \\( C \\) in series with process \\( G \\), and sensor \\( H \\) in the feedback path. What is the transfer function from \\( R \\) to \\( Y \\)?'
      },
      options: [
        { th: '\\( \\dfrac{CGH}{1 + CG} \\)', en: '\\( \\dfrac{CGH}{1 + CG} \\)' },
        { th: '\\( \\dfrac{CG}{1 + CG} \\)', en: '\\( \\dfrac{CG}{1 + CG} \\)' },
        { th: '\\( \\dfrac{CG + H}{1 + CG} \\)', en: '\\( \\dfrac{CG + H}{1 + CG} \\)' },
        { th: '\\( \\dfrac{CG}{1 + CGH} \\)', en: '\\( \\dfrac{CG}{1 + CGH} \\)' }
      ],
      answer: 3,
      explain: {
        th: 'ตัวเศษคือผลคูณของบล็อกบนเส้นทางตรงจากอินพุตไปเอาต์พุต ส่วนตัวส่วนคือ \\( 1 + \\) ผลคูณของทุกบล็อก <em>รอบวง</em> ซึ่งรวมเซนเซอร์ด้วยเสมอ ข้อที่ตัวส่วนเป็น \\( 1 + CG \\) คือกรณีที่เซนเซอร์มีอัตราขยายเท่ากับหนึ่งพอดีเท่านั้น',
        en: 'The numerator is the product of blocks on the forward path; the denominator is \\( 1 + \\) the product of every block <em>around the loop</em>, which always includes the sensor. A denominator of \\( 1 + CG \\) is the special case of a sensor with unity gain.'
      }
    },
    {
      q: {
        th: 'ระบบอันดับหนึ่งมีค่าคงที่เวลา 4 วินาที หลังป้อนขั้นบันไดแล้วต้องรอประมาณเท่าใดจึงจะไปถึง 95% ของค่าสุดท้าย',
        en: 'A first-order system has a 4 s time constant. After a step, roughly how long until it reaches 95% of its final value?'
      },
      options: [
        { th: 'ประมาณ 12 วินาที เพราะที่สามเท่าของค่าคงที่เวลาระบบไปถึง 95% ของการเปลี่ยนแปลง', en: 'About 12 s, since at three time constants the system covers 95% of the change' },
        { th: 'ประมาณ 8 วินาที เพราะที่สองเท่าของค่าคงที่เวลาระบบไปถึงเกือบค่าสุดท้ายแล้ว', en: 'About 8 s, since two time constants already bring it near the final value' },
        { th: 'ประมาณ 4 วินาที เพราะค่าคงที่เวลาคือเวลาที่ระบบใช้ไปถึงค่าสุดท้ายโดยนิยาม', en: 'About 4 s, the time constant being by definition the time to reach the final value' },
        { th: 'ประมาณ 20 วินาที เพราะต้องรอครบห้าเท่าของค่าคงที่เวลาจึงจะถึง 95%', en: 'About 20 s, since five time constants are needed to reach 95%' }
      ],
      answer: 0,
      explain: {
        th: 'ที่ \\( t = \\tau \\) ไปถึง 63.2% ที่ \\( 2\\tau \\) ได้ 86.5% ที่ \\( 3\\tau \\) ได้ 95.0% และที่ \\( 5\\tau \\) ได้ 99.3% ข้อที่ตอบ 20 วินาทีจึงเป็นเกณฑ์ของ 99.3% ไม่ใช่ 95%',
        en: 'At \\( t = \\tau \\) it reaches 63.2%, at \\( 2\\tau \\) 86.5%, at \\( 3\\tau \\) 95.0% and at \\( 5\\tau \\) 99.3%. The 20 s answer is the criterion for 99.3%, not 95%.'
      }
    },
    {
      q: {
        th: 'โรงเรือนหนึ่งติดฉนวนที่หลังคาเพิ่ม ทำให้ค่า \\( UA \\) ลดลงครึ่งหนึ่ง จากสมการ \\( \\tau = C/UA \\) และ \\( K = 1/UA \\) ผลที่ตามมาคือข้อใด',
        en: 'A greenhouse gains roof insulation, halving \\( UA \\). From \\( \\tau = C/UA \\) and \\( K = 1/UA \\), what follows?'
      },
      options: [
        { th: 'ค่าคงที่เวลาเพิ่มเป็นสองเท่า และอุณหภูมิที่ได้ต่อกำลังฮีตเตอร์หนึ่งวัตต์ลดลงครึ่งหนึ่ง', en: 'The time constant doubles, and the temperature gained per watt of heater halves' },
        { th: 'ค่าคงที่เวลาไม่เปลี่ยน และอุณหภูมิที่ได้ต่อกำลังฮีตเตอร์หนึ่งวัตต์เพิ่มเป็นสองเท่า', en: 'The time constant is unchanged, and the temperature gained per watt doubles' },
        { th: 'ค่าคงที่เวลาเพิ่มเป็นสองเท่า และอุณหภูมิที่ได้ต่อกำลังฮีตเตอร์หนึ่งวัตต์เพิ่มเป็นสองเท่า', en: 'The time constant doubles, and the temperature gained per watt of heater doubles' },
        { th: 'ค่าคงที่เวลาลดลงครึ่งหนึ่ง และอุณหภูมิที่ได้ต่อกำลังฮีตเตอร์หนึ่งวัตต์เพิ่มเป็นสองเท่า', en: 'The time constant halves, and the temperature gained per watt of heater doubles' }
      ],
      answer: 2,
      explain: {
        th: 'ทั้ง \\( \\tau \\) และ \\( K \\) มี \\( UA \\) อยู่ที่ตัวส่วน การลด \\( UA \\) ลงครึ่งหนึ่งจึงทำให้ทั้งคู่เพิ่มเป็นสองเท่า โรงเรือนที่ฉนวนดีจึงร้อนง่ายขึ้นแต่ก็เปลี่ยนแปลงช้าลงด้วย ซึ่งเป็นผลที่ต้องยอมรับคู่กันเสมอ',
        en: 'Both \\( \\tau \\) and \\( K \\) carry \\( UA \\) in the denominator, so halving it doubles both. A well-insulated house is easier to heat and also slower to change — the two always arrive together.'
      }
    },
    {
      q: {
        th: 'ขณะทดสอบขั้นบันได กราฟอุณหภูมิพุ่งเลยค่าสุดท้ายไปเล็กน้อยก่อนวกกลับลงมานิ่ง ข้อสรุปใดถูกต้อง',
        en: 'During a step test the temperature rises slightly past its final value before coming back down to settle. What follows?'
      },
      options: [
        { th: 'การทดสอบใช้ขั้นบันไดที่เล็กเกินไป สัญญาณรบกวนจึงกลบรูปร่างที่แท้จริงของผลตอบสนอง', en: 'The step was too small, so noise has masked the response&rsquo;s true shape' },
        { th: 'ระบบมีอัตราขยายสูงเกินไป ต้องลดกำลังฮีตเตอร์ลงก่อนจึงจะวัดค่าคงที่เวลาได้ถูกต้อง', en: 'The gain is too high; the heater must be reduced before the time constant can be measured' },
        { th: 'เซนเซอร์มีความคลาดเคลื่อนเชิงระบบ ควรสอบเทียบใหม่แล้วจึงทดสอบขั้นบันไดอีกครั้ง', en: 'The sensor has a systematic bias; recalibrate it and repeat the step test' },
        { th: 'ระบบนี้ไม่ใช่อันดับหนึ่งล้วน เพราะผลตอบสนองอันดับหนึ่งเข้าหาค่าสุดท้ายจากด้านล่างเสมอ', en: 'The system is not purely first-order, since a first-order response approaches from below' }
      ],
      answer: 3,
      explain: {
        th: 'สมการ (6.6) เป็นฟังก์ชันที่เพิ่มขึ้นอย่างเดียว การพุ่งเกินจึงเป็นหลักฐานว่ามีตัวเก็บพลังงานมากกว่าหนึ่งตัว หรือมีความหน่วงเวลาในวงรอบ ไม่ใช่เรื่องของอัตราขยายหรือการสอบเทียบเซนเซอร์',
        en: 'Equation (6.6) is monotonic, so an overshoot is evidence of more than one energy store, or of dead time in the loop. It is not a matter of gain or of sensor calibration.'
      }
    },
    {
      q: {
        th: 'แกนเคลื่อนที่สองแกนมี \\( \\omega_n \\) เท่ากัน แกนแรกมี \\( \\zeta = 0.3 \\) แกนที่สองมี \\( \\zeta = 0.7 \\) แกนใดเข้าสู่ตำแหน่งเป้าหมายได้เร็วกว่า',
        en: 'Two axes share the same \\( \\omega_n \\); one has \\( \\zeta = 0.3 \\), the other \\( \\zeta = 0.7 \\). Which settles on target sooner?'
      },
      options: [
        { th: 'แกนที่มี \\( \\zeta = 0.3 \\) เพราะพุ่งถึงเป้าหมายครั้งแรกได้เร็วกว่าอย่างเห็นได้ชัด', en: 'The \\( \\zeta = 0.3 \\) axis, since it reaches the target first by a clear margin' },
        { th: 'แกนที่มี \\( \\zeta = 0.7 \\) เพราะเวลาเข้าที่แปรผกผันกับ \\( \\zeta \\) และแทบไม่แกว่งเลย', en: 'The \\( \\zeta = 0.7 \\) axis, since settling time varies inversely with \\( \\zeta \\) and it barely rings' },
        { th: 'ทั้งสองแกนเท่ากัน เพราะเวลาเข้าที่ถูกกำหนดโดย \\( \\omega_n \\) เพียงตัวเดียวเท่านั้น', en: 'Both equally, since settling time is governed by \\( \\omega_n \\) alone' },
        { th: 'ตอบไม่ได้ เพราะต้องทราบอัตราขยายของตัวควบคุมทั้งสองแกนประกอบด้วยเสมอ', en: 'Unanswerable without also knowing each axis&rsquo;s controller gain' }
      ],
      answer: 1,
      explain: {
        th: 'จากสมการ (6.9) \\( t_s \\approx 4/(\\zeta\\omega_n) \\) ดังนั้น \\( \\zeta \\) ที่สูงกว่าให้เวลาเข้าที่สั้นกว่า แม้จะ “ถึงเป้าหมายครั้งแรก” ช้ากว่าก็ตาม การแตะเป้าหมายครั้งแรกแล้วแกว่งไปมาไม่ถือว่าเข้าที่',
        en: 'From equation (6.9), \\( t_s \\approx 4/(\\zeta\\omega_n) \\), so the higher \\( \\zeta \\) settles sooner even though it touches the target later. Touching the target and then ringing about it does not count as settled.'
      }
    },
    {
      q: {
        th: 'ควรทดสอบขั้นบันไดของระบบควบคุมอุณหภูมิโรงเรือนในช่วงเวลาใด และเพราะเหตุใด',
        en: 'When should a step test on a greenhouse temperature loop be run, and why?'
      },
      options: [
        { th: 'ช่วงเที่ยงวัน เพราะอุณหภูมิภายนอกสูงที่สุดจึงทำให้สัญญาณที่วัดได้ชัดเจนที่สุด', en: 'At midday, when the outside temperature is highest and the signal clearest' },
        { th: 'ช่วงเช้าตรู่ เพราะแสงอาทิตย์กำลังเพิ่มขึ้นอย่างสม่ำเสมอจึงชดเชยออกจากข้อมูลได้ง่าย', en: 'At dawn, when sunlight rises steadily and so is easy to subtract from the data' },
        { th: 'ช่วงกลางคืน เพราะไม่มีแสงอาทิตย์มารบกวน และอุณหภูมิภายนอกค่อนข้างคงที่', en: 'At night, when there is no solar disturbance and the outside is reasonably steady' },
        { th: 'ช่วงใดก็ได้ เพราะการทดสอบขั้นบันไดวัดเฉพาะผลจากฮีตเตอร์ จึงไม่ได้รับผลจากสิ่งรบกวน', en: 'At any time, since a step test measures only the heater and ignores disturbances' }
      ],
      answer: 2,
      explain: {
        th: 'แสงอาทิตย์เป็นสิ่งรบกวนที่ใหญ่กว่าฮีตเตอร์มาก ถ้าทดสอบตอนกลางวันกราฟที่ได้จะเป็นการตอบสนองต่อเมฆและมุมแดด ไม่ใช่ต่อฮีตเตอร์ ส่วนความคิดที่ว่าการทดสอบขั้นบันไดวัดเมิดผลจากฮีตเตอร์เพียงอย่างเดียวเป็นความเข้าใจผิดสำคัญ เพราะกราฟที่วัดได้คือผลรวมของทุกสิ่งที่กระทำต่อระบบ',
        en: 'Sunlight is a far larger disturbance than the heater, so a daytime curve records the clouds and sun angle rather than the heater. The belief that a step test measures only the heater is the key misconception: a measured curve is the sum of everything acting on the system.'
      }
    },
    {
      q: {
        th: 'ระบบสองระบบมี \\( \\tau = 10 \\) นาทีเท่ากัน แต่ระบบแรกมี \\( \\theta = 1 \\) นาที ส่วนระบบที่สองมี \\( \\theta = 12 \\) นาที ข้อสรุปใดถูกต้อง',
        en: 'Two systems share \\( \\tau = 10 \\) min, but one has \\( \\theta = 1 \\) min and the other \\( \\theta = 12 \\) min. What follows?'
      },
      options: [
        { th: 'ระบบที่สองควบคุมยากกว่ามาก เพราะตัวควบคุมต้องสั่งงานโดยยังไม่เห็นผลของคำสั่งก่อนหน้า', en: 'The second is far harder to control, the controller acting before it can see its last command' },
        { th: 'ระบบที่สองควบคุมง่ายกว่า เพราะความหน่วงที่ยาวช่วยกรองสัญญาณรบกวนออกไปได้มากกว่า', en: 'The second is easier, its long delay filtering out more of the noise' },
        { th: 'ทั้งสองระบบควบคุมยากเท่ากัน เพราะค่าคงที่เวลาซึ่งเท่ากันเป็นตัวกำหนดความยากทั้งหมด', en: 'Both are equally hard, the identical time constants governing the difficulty entirely' },
        { th: 'ระบบแรกควบคุมยากกว่า เพราะตอบสนองเร็วจนตัวควบคุมตามการเปลี่ยนแปลงไม่ทัน', en: 'The first is harder, responding so fast that the controller cannot keep up' }
      ],
      answer: 0,
      explain: {
        th: 'อัตราส่วน \\( \\theta/\\tau \\) ของสองระบบคือ 0.1 กับ 1.2 ซึ่งต่างกันมาก ความหน่วงทำให้ตัวควบคุมต้องตัดสินใจจากข้อมูลเก่า จึงมีแนวโน้มสั่งเกินแล้วต้องแก้กลับ ซึ่งเป็นต้นเหตุของการแกว่งตามที่เห็นในบทที่ 2',
        en: 'Their \\( \\theta/\\tau \\) ratios are 0.1 and 1.2, a wide gap. Dead time forces the controller to decide on stale information, so it tends to over-command and then correct back — the origin of the hunting seen in Chapter 2.'
      }
    }
  ]
});

AMRQuiz.mount('ch06-post', {
  type: 'post',
  chapter: 'ch06',
  title: { th: 'แบบทดสอบหลังเรียน — บทที่ 6', en: 'Post-test — Chapter 6' },
  intro: {
    th: 'สิบข้อ เน้นการคำนวณจากข้อมูลทดสอบจริงและการตีความเชิงกายภาพ เกณฑ์ผ่าน 70%',
    en: 'Ten items on computing from real test data and interpreting it physically. Pass mark 70%.'
  },
  questions: [
    {
      q: {
        th: 'การทดสอบขั้นบันไดให้ \\( t_{28} = 6 \\) นาที และ \\( t_{63} = 14 \\) นาที ค่า \\( \\tau \\) และ \\( \\theta \\) เป็นเท่าใด',
        en: 'A step test gives \\( t_{28} = 6 \\) min and \\( t_{63} = 14 \\) min. What are \\( \\tau \\) and \\( \\theta \\)?'
      },
      options: [
        { th: '\\( \\tau = 6 \\) นาที และ \\( \\theta = 8 \\) นาที', en: '\\( \\tau = 6 \\) min and \\( \\theta = 8 \\) min' },
        { th: '\\( \\tau = 8 \\) นาที และ \\( \\theta = 6 \\) นาที', en: '\\( \\tau = 8 \\) min and \\( \\theta = 6 \\) min' },
        { th: '\\( \\tau = 12 \\) นาที และ \\( \\theta = 2 \\) นาที', en: '\\( \\tau = 12 \\) min and \\( \\theta = 2 \\) min' },
        { th: '\\( \\tau = 14 \\) นาที และ \\( \\theta = 6 \\) นาที', en: '\\( \\tau = 14 \\) min and \\( \\theta = 6 \\) min' }
      ],
      answer: 2,
      explain: {
        th: 'จากสมการ (6.12): \\( \\tau = 1.5(14-6) = 12 \\) นาที และ \\( \\theta = 14 - 12 = 2 \\) นาที ข้อที่ตอบ \\( \\tau = 8 \\) มาจากการลืมคูณ 1.5 ส่วนข้อที่ตอบ \\( \\tau = 14 \\) มาจากการเข้าใจผิดว่า \\( t_{63} \\) คือค่าคงที่เวลาโดยตรง ซึ่งจริงเฉพาะเมื่อไม่มีความหน่วงเลย',
        en: 'From equation (6.12): \\( \\tau = 1.5(14-6) = 12 \\) min and \\( \\theta = 14 - 12 = 2 \\) min. The \\( \\tau = 8 \\) answer forgets the 1.5; the \\( \\tau = 14 \\) answer treats \\( t_{63} \\) as the time constant itself, true only when there is no dead time.'
      }
    },
    {
      q: {
        th: 'ถังผสมปุ๋ยมี \\( \\tau = V/F \\) ถ้าเปลี่ยนไปใช้ถังที่มีปริมาตรเป็นสองเท่าโดยอัตราการไหลเท่าเดิม ผลที่ตามมาคือข้อใด',
        en: 'A mixing tank has \\( \\tau = V/F \\). Moving to a tank of twice the volume at the same flow does what?'
      },
      options: [
        { th: 'ตอบสนองช้าลงเป็นสองเท่า ทำให้การแก้ไขค่า EC ที่ผิดพลาดใช้เวลานานขึ้นเป็นสองเท่าด้วย', en: 'It responds twice as slowly, so correcting an EC error also takes twice as long' },
        { th: 'ตอบสนองเร็วขึ้นเป็นสองเท่า เพราะปริมาตรที่มากขึ้นช่วยเจือจางสารเข้มข้นได้รวดเร็วกว่าเดิม', en: 'It responds twice as fast, the larger volume diluting the concentrate more quickly' },
        { th: 'ตอบสนองเท่าเดิม เพราะค่าคงที่เวลาของถังผสมขึ้นกับอัตราการไหลเพียงอย่างเดียวเท่านั้น', en: 'It responds identically, a tank&rsquo;s time constant depending on flow alone' },
        { th: 'ตอบสนองช้าลงสี่เท่า เพราะปริมาตรเข้าไปอยู่ในรูปกำลังสองของสมการค่าคงที่เวลา', en: 'It responds four times slower, volume entering the time constant as a square' }
      ],
      answer: 0,
      explain: {
        th: 'ค่าคงที่เวลาแปรตามปริมาตรโดยตรง ถังใหญ่จึงช้ากว่าตามสัดส่วน นี่คือเหตุผลที่ระบบ fertigation นิยมถังเล็กที่ไหลเวียนเร็ว เพราะยิ่งช้า การแก้ไขค่าที่ผิดก็ยิ่งกินเวลา และช่วงที่พืชได้รับสารละลายผิดสูตรก็ยิ่งยาว',
        en: 'The time constant scales directly with volume, so a bigger tank is proportionally slower. This is why fertigation skids favour a small, fast-circulating tank: the slower the vessel, the longer a wrong mixture reaches the crop before it can be corrected.'
      }
    },
    {
      q: {
        th: 'ระบบอันดับสองมี \\( \\zeta = 0.5 \\) ค่าพุ่งเกินสูงสุดเป็นเท่าใด',
        en: 'A second-order system has \\( \\zeta = 0.5 \\). What is its peak overshoot?'
      },
      options: [
        { th: 'ประมาณ 50% เพราะค่าพุ่งเกินแปรตรงกับอัตราส่วนการหน่วงนี้', en: 'About 50%, overshoot varying directly with the damping ratio' },
        { th: 'ประมาณ 25% เพราะค่าพุ่งเกินเป็นครึ่งของอัตราส่วนการหน่วง', en: 'About 25%, overshoot being half the damping ratio in percent' },
        { th: 'ประมาณ 5% เพราะการหน่วงระดับนี้ใกล้เคียงกับการหน่วงวิกฤต', en: 'About 5%, this damping ratio being close to critical already' },
        { th: 'ประมาณ 16% จากสูตรเลขชี้กำลังของค่าพุ่งเกินสูงสุด', en: 'About 16%, from the exponential formula for peak overshoot' }
      ],
      answer: 3,
      explain: {
        th: 'จากสมการ (6.8): \\( \\exp(-\\pi(0.5)/\\sqrt{0.75}) = \\exp(-1.814) \\approx 0.163 \\) หรือ 16.3% ความสัมพันธ์ไม่เป็นเชิงเส้น ตัวเลือกที่คิดแบบสัดส่วนตรงจึงผิด ค่าที่ควรจำคือ \\( \\zeta = 0.5 \\) ให้ราว 16% และ \\( \\zeta = 0.7 \\) ให้ราว 5%',
        en: 'From equation (6.8): \\( \\exp(-\\pi(0.5)/\\sqrt{0.75}) = \\exp(-1.814) \\approx 0.163 \\), or 16.3%. The relation is not linear, so the proportional answers fail. Worth memorising: \\( \\zeta = 0.5 \\) gives about 16%, \\( \\zeta = 0.7 \\) about 5%.'
      }
    },
    {
      q: {
        th: 'แกนหมุนของหุ่นยนต์มี \\( \\zeta = 0.4 \\) และ \\( \\omega_n = 5 \\) rad/s เวลาเข้าที่โดยประมาณเป็นเท่าใด',
        en: 'A robot axis has \\( \\zeta = 0.4 \\) and \\( \\omega_n = 5 \\) rad/s. What is its approximate settling time?'
      },
      options: [
        { th: 'ประมาณ 0.8 วินาที จากการหารสี่ด้วยความถี่ธรรมชาติโดยไม่คิดอัตราส่วนการหน่วง', en: 'About 0.8 s, dividing four by the natural frequency alone' },
        { th: 'ประมาณ 2.0 วินาที จากการหารสี่ด้วยผลคูณของอัตราส่วนการหน่วงกับความถี่ธรรมชาติ', en: 'About 2.0 s, dividing four by the product of damping ratio and natural frequency' },
        { th: 'ประมาณ 1.6 วินาที จากการคูณอัตราส่วนการหน่วงเข้ากับความถี่ธรรมชาติโดยตรง', en: 'About 1.6 s, from multiplying the damping ratio by the natural frequency' },
        { th: 'ประมาณ 5.0 วินาที จากการหารความถี่ธรรมชาติด้วยอัตราส่วนการหน่วงที่กำหนดให้', en: 'About 5.0 s, dividing the natural frequency by the damping ratio' }
      ],
      answer: 1,
      explain: {
        th: 'จากสมการ (6.9): \\( t_s \\approx 4/(\\zeta\\omega_n) = 4/(0.4 \\times 5) = 2.0 \\) วินาที จุดที่ต้องจำคือตัวส่วนเป็น <em>ผลคูณ</em> ของทั้งสองค่า ไม่ใช่ค่าใดค่าหนึ่งเพียงอย่างเดียว',
        en: 'From equation (6.9): \\( t_s \\approx 4/(\\zeta\\omega_n) = 4/(0.4 \\times 5) = 2.0 \\) s. The point to hold on to is that the denominator is the <em>product</em> of the two, not either one alone.'
      }
    },
    {
      q: {
        th: 'แบบจำลองที่สร้างจากขั้นบันไดขาขึ้นของกล่องทดลองอุณหภูมิ ทำนายขั้นบันไดขาลงได้ไม่แม่น เหตุผลทางกายภาพที่น่าจะเป็นที่สุดคือข้อใด',
        en: 'A model built from a rising step on a thermal chamber predicts the falling step poorly. The likeliest physical reason is which?'
      },
      options: [
        { th: 'ฮีตเตอร์ให้ความร้อนได้ แต่ทำให้เย็นลงไม่ได้ การเย็นลงจึงพึ่งการสูญเสียความร้อนตามธรรมชาติ', en: 'The heater can add heat but not remove it, so cooling relies on natural losses alone' },
        { th: 'ค่าคงที่เวลาของระบบความร้อนเปลี่ยนไปตามเวลาที่ผ่านไป จึงไม่คงที่พอให้สร้างแบบจำลองได้', en: 'A thermal system&rsquo;s time constant drifts with time and is never constant enough to model' },
        { th: 'เซนเซอร์อุณหภูมิมีความคลาดเคลื่อนเชิงระบบที่ปรากฏเฉพาะตอนอุณหภูมิกำลังลดลงเท่านั้น', en: 'The sensor carries a systematic bias that appears only while the temperature falls' },
        { th: 'ขั้นบันไดขาลงมีขนาดเล็กกว่าขาขึ้นเสมอ ทำให้สัญญาณรบกวนมีสัดส่วนมากกว่าในข้อมูล', en: 'A falling step is always smaller than a rising one, so noise forms a larger share of the data' }
      ],
      answer: 0,
      explain: {
        th: 'ระบบความร้อนที่มีแต่ฮีตเตอร์ไม่สมมาตร การเพิ่มอุณหภูมิทำได้ด้วยกำลังที่เราสั่ง แต่การลดอุณหภูมิทำได้เพียงรอให้ความร้อนรั่วออกไปเองซึ่งช้ากว่าและไม่ขึ้นกับคำสั่ง แบบจำลองเชิงเส้นตัวเดียวจึงอธิบายทั้งสองทิศทางได้ไม่ดี',
        en: 'A heat-only system is asymmetric: warming uses the power we command, while cooling can only wait for heat to leak away, which is slower and independent of the command. One linear model therefore serves both directions poorly.'
      }
    },
    {
      q: {
        th: 'เซนเซอร์ที่ใช้ทดสอบขั้นบันไดมีค่าคงที่เวลาของตัวเองเท่ากับ 20% ของค่าคงที่เวลาของกระบวนการ ผลที่มีต่อค่า \\( \\tau \\) ที่อ่านได้คือข้อใด',
        en: 'The probe used for a step test has its own time constant equal to 20% of the process&rsquo;s. What does that do to the \\( \\tau \\) you read?'
      },
      options: [
        { th: 'ค่าที่อ่านได้จะถูกต้อง เพราะวิธีสองจุดในสมการ (6.12) หักผลของเซนเซอร์ออกไปโดยอัตโนมัติ', en: 'The reading is correct, the two-point method of equation (6.12) removing the probe&rsquo;s effect' },
        { th: 'ค่าที่อ่านได้จะถูกต้อง เพราะค่าคงที่เวลาของเซนเซอร์เล็กเกินกว่าจะมีผลต่อผลลัพธ์ใด ๆ', en: 'The reading is correct, the probe&rsquo;s time constant being too small to matter at all' },
        { th: 'ค่าที่อ่านได้จะสูงกว่าความจริง เพราะกราฟที่วัดได้รวมความเฉื่อยของเซนเซอร์เข้าไปด้วย', en: 'The reading comes out high, the measured curve including the probe&rsquo;s own lag' },
        { th: 'ค่าที่อ่านได้จะต่ำกว่าความจริง เพราะเซนเซอร์กรองการเปลี่ยนแปลงช่วงต้นออกไปบางส่วน', en: 'The reading comes out low, the probe filtering away part of the early change' }
      ],
      answer: 2,
      explain: {
        th: 'สิ่งที่เราวัดได้คือกระบวนการต่ออนุกรมกับเซนเซอร์ ค่าคงที่เวลาที่เห็นจึงมากกว่าของกระบวนการเพียงอย่างเดียว นี่คือเหตุผลที่สเปกของเซนเซอร์ควรมี \\( \\tau \\) ต่ำกว่าของกระบวนการอย่างน้อยสิบเท่าในงานที่ต้องการแบบจำลองแม่นยำ',
        en: 'What we measure is the process in series with the probe, so the apparent time constant exceeds the process&rsquo;s own. This is why, where an accurate model matters, the probe&rsquo;s \\( \\tau \\) should be at least ten times smaller than the process&rsquo;s.'
      }
    },
    {
      q: {
        th: 'ในแอนิเมชัน 6.3 เมื่อเพิ่ม \\( \\omega_n \\) จาก 4 เป็น 8 rad/s โดยไม่แตะ \\( \\zeta \\) กราฟเปลี่ยนไปอย่างไร',
        en: 'In Animation 6.3, raising \\( \\omega_n \\) from 4 to 8 rad/s without touching \\( \\zeta \\) changes the curve how?'
      },
      options: [
        { th: 'ค่าพุ่งเกินเพิ่มขึ้นเป็นสองเท่า ส่วนเวลาเข้าที่ลดลงครึ่งหนึ่งตามความถี่ที่เพิ่มขึ้น', en: 'Overshoot doubles while settling time halves as the frequency rises' },
        { th: 'ค่าพุ่งเกินคงเดิม แต่กราฟทั้งเส้นถูกบีบตามแกนเวลา ทำให้เวลาเข้าที่ลดลงครึ่งหนึ่ง', en: 'Overshoot is unchanged but the whole curve compresses in time, halving the settling time' },
        { th: 'ค่าพุ่งเกินคงเดิมและเวลาเข้าที่คงเดิม เพราะทั้งสองค่าถูกกำหนดโดย \\( \\zeta \\) เท่านั้น', en: 'Both overshoot and settling time are unchanged, \\( \\zeta \\) governing them both' },
        { th: 'ค่าพุ่งเกินลดลงครึ่งหนึ่ง และเวลาเข้าที่ลดลงครึ่งหนึ่งเช่นกันตามสัดส่วนของความถี่', en: 'Overshoot halves and settling time halves with it, both tracking the frequency' }
      ],
      answer: 1,
      explain: {
        th: 'สมการ (6.8) มีแต่ \\( \\zeta \\) ค่าพุ่งเกินจึงไม่ขยับ ส่วนสมการ (6.9) มี \\( \\omega_n \\) อยู่ที่ตัวส่วน เวลาทั้งหมดจึงหดลงครึ่งหนึ่ง พูดอีกอย่างคือ \\( \\zeta \\) กำหนด <em>รูปร่าง</em> ส่วน \\( \\omega_n \\) กำหนด <em>มาตราส่วนของเวลา</em>',
        en: 'Equation (6.8) contains only \\( \\zeta \\), so overshoot does not move, while equation (6.9) carries \\( \\omega_n \\) in the denominator, so every time halves. Put differently: \\( \\zeta \\) sets the <em>shape</em> and \\( \\omega_n \\) the <em>time scale</em>.'
      }
    },
    {
      q: {
        th: 'ขณะทดสอบกล่องทดลอง การเปิดพัดลมค้างไว้แล้วทำซ้ำการทดสอบขั้นบันได ควรเห็นผลเป็นอย่างไร',
        en: 'Repeating a step test on the thermal chamber with the fan left running should show what?'
      },
      options: [
        { th: '\\( K \\) ลดลงแต่ \\( \\tau \\) เพิ่มขึ้น เพราะการสูญเสียความร้อนที่มากขึ้นทำให้ระบบตอบสนองช้าลง', en: '\\( K \\) falls but \\( \\tau \\) rises, the greater heat loss slowing the response' },
        { th: '\\( K \\) คงเดิมแต่ \\( \\tau \\) ลดลง เพราะพัดลมไม่ได้เปลี่ยนอุณหภูมิสุดท้ายที่ระบบไปถึง', en: '\\( K \\) is unchanged but \\( \\tau \\) falls, the fan not altering the final temperature' },
        { th: 'ทั้ง \\( K \\) และ \\( \\tau \\) เพิ่มขึ้น เพราะพัดลมช่วยกระจายความร้อนให้ทั่วถึงกล่องมากขึ้น', en: 'Both \\( K \\) and \\( \\tau \\) rise, the fan spreading heat more evenly through the box' },
        { th: 'ทั้ง \\( K \\) และ \\( \\tau \\) ลดลง เพราะพัดลมเพิ่มการสูญเสียความร้อนซึ่งก็คือเพิ่มค่า \\( UA \\)', en: 'Both \\( K \\) and \\( \\tau \\) fall, the fan raising heat loss, which is to say raising \\( UA \\)' }
      ],
      answer: 3,
      explain: {
        th: 'จากสมการ (6.4) ทั้ง \\( \\tau = C/UA \\) และ \\( K = 1/UA \\) มี \\( UA \\) อยู่ที่ตัวส่วน การเพิ่ม \\( UA \\) จึงลดทั้งคู่พร้อมกัน กล่องจะร้อนได้น้อยลงต่อกำลังหนึ่งวัตต์ แต่ก็เข้าสู่ค่าสุดท้ายเร็วขึ้นด้วย',
        en: 'From equation (6.4) both \\( \\tau = C/UA \\) and \\( K = 1/UA \\) carry \\( UA \\) in the denominator, so raising it lowers both at once: the box warms less per watt, but reaches its final value sooner.'
      }
    },
    {
      q: {
        th: 'เหตุใดตัวส่วนของสมการ (6.2) จึงรวมเซนเซอร์ \\( H \\) เข้าไปด้วย ทั้งที่เซนเซอร์ไม่ได้อยู่บนเส้นทางจากอินพุตไปเอาต์พุต',
        en: 'Why does the denominator of equation (6.2) include the sensor \\( H \\), when the sensor is not on the path from input to output?'
      },
      options: [
        { th: 'เพราะเซนเซอร์เป็นส่วนหนึ่งของเส้นทางที่สัญญาณวิ่งครบรอบ ซึ่งเป็นสิ่งที่กำหนดพฤติกรรมของวงรอบ', en: 'Because the sensor lies on the path a signal travels right round, which is what sets the loop&rsquo;s behaviour' },
        { th: 'เพราะเซนเซอร์มีความหน่วงเวลาของตัวเองเสมอ จึงต้องนำมารวมไว้ในตัวส่วนตามนิยามของพีชคณิตบล็อก', en: 'Because a sensor always has its own delay, which block algebra requires in the denominator' },
        { th: 'เพราะตัวส่วนแทนความคลาดเคลื่อนของการวัด ซึ่งมาจากเซนเซอร์เพียงองค์ประกอบเดียวเท่านั้น', en: 'Because the denominator represents measurement error, which comes from the sensor alone' },
        { th: 'เพราะเซนเซอร์ต่อขนานกับกระบวนการ การต่อขนานจึงทำให้เกิดการบวกกันที่ตัวส่วนของสมการ', en: 'Because the sensor parallels the process, and parallel paths add in the denominator' }
      ],
      answer: 0,
      explain: {
        th: 'ตัวส่วน \\( 1 + CGH \\) คือ “หนึ่งบวกอัตราขยายวงรอบ” ซึ่งหมายถึงผลคูณของทุกสิ่งที่สัญญาณผ่านตั้งแต่ออกจากจุดเปรียบเทียบจนกลับมาที่เดิม ถ้าเซนเซอร์มีอัตราขยายไม่เท่ากับหนึ่ง เช่น ให้ 10 mV ต่อองศา ค่านั้นจะเปลี่ยนพฤติกรรมของวงรอบทั้งวงทันที',
        en: 'The denominator \\( 1 + CGH \\) is “one plus the loop gain”, the product of everything a signal passes through from the comparator back to itself. If the sensor&rsquo;s gain is not unity — say 10 mV per degree — that figure changes the behaviour of the entire loop.'
      }
    },
    {
      q: {
        th: 'ทีมหนึ่งต้องการแบบจำลองของโรงเรือนเพื่อปรับจูนตัวควบคุม จึงเขียนสมการของอากาศ ดิน พืช โครงสร้าง และความชื้นรวม 23 สมการ ข้อวิจารณ์ใดสมเหตุสมผลที่สุด',
        en: 'A team wanting a greenhouse model for controller tuning writes 23 equations covering air, soil, crop, structure and humidity. What is the soundest criticism?'
      },
      options: [
        { th: 'แบบจำลองควรใช้สมการเชิงอนุพันธ์ย่อยแทนสมการสามัญ เพื่อให้สะท้อนการกระจายตัวเชิงพื้นที่', en: 'It should use partial rather than ordinary differential equations, to capture spatial variation' },
        { th: 'แบบจำลองควรแยกออกเป็นหลายไฟล์ตามระบบย่อย เพื่อให้ทีมงานแบ่งกันพัฒนาได้สะดวกขึ้น', en: 'It should be split across files by subsystem, so the team can develop it in parallel' },
        { th: 'แบบจำลองยังไม่ครบ เพราะยังขาดพลวัตของคาร์บอนไดออกไซด์ซึ่งมีผลต่อการสังเคราะห์แสงโดยตรง', en: 'It is still incomplete, lacking the carbon-dioxide dynamics that drive photosynthesis' },
        { th: 'แบบจำลองละเอียดเกินความจำเป็นสำหรับการปรับจูน ซึ่งต้องการเพียง \\( K, \\tau, \\theta \\) สามค่า', en: 'It is finer than tuning requires, which needs only the three numbers \\( K, \\tau, \\theta \\)' }
      ],
      answer: 3,
      explain: {
        th: 'แบบจำลองที่ดีคือแบบที่หยาบที่สุดเท่าที่ยังตอบคำถามได้ การปรับจูน PID ต้องการเพียงสามตัวเลขซึ่งหาได้จากการทดสอบขั้นบันไดหนึ่งครั้งในคืนเดียว ส่วนแบบจำลอง 23 สมการมีประโยชน์จริงสำหรับงานออกแบบโรงเรือนหรือการวิจัย แต่ไม่ใช่สำหรับโจทย์นี้',
        en: 'The best model is the coarsest that answers the question, and tuning a PID needs just three numbers obtainable from one night&rsquo;s step test. A 23-equation model is genuinely useful for designing a greenhouse or for research — but not for this task.'
      }
    }
  ]
});
