/* ==========================================================================
   Chapter 2 — pre-test and post-test items
   Written to the course item-writing rules: options parallel in form and
   length, distractors drawn from real misconceptions, and questions that ask
   the learner to trace, diagnose, compute or choose rather than recall.
   Copyright (c) 2026 Jedsada Saijai.
   ========================================================================== */

AMRQuiz.mount('ch02-pre', {
  type: 'pre',
  chapter: 'ch02',
  title: { th: 'แบบทดสอบก่อนเรียน — บทที่ 2', en: 'Pre-test — Chapter 2' },
  intro: {
    th: 'สำรวจความรู้เดิมก่อนเริ่มบทเรียน เน้นการจำแนกสถานการณ์และการให้เหตุผล ไม่มีผลต่อคะแนนเก็บ',
    en: 'A diagnostic of prior knowledge, built around classifying situations and reasoning. Not graded.'
  },
  questions: [
    {
      q: {
        th: 'ระบบให้น้ำสี่ระบบต่อไปนี้ ระบบใดเป็นระบบปิดอย่างแท้จริง',
        en: 'Of these four irrigation schemes, which is genuinely closed-loop?'
      },
      options: [
        { th: 'ตั้งเวลารดน้ำวันละ 20 นาที และบันทึกเวลาที่รดจริงไว้ในไฟล์ให้ผู้ดูแลตรวจย้อนหลังได้', en: 'A 20 min daily timer that logs the actual run times to a file for later review' },
        { th: 'วัดความชื้นดินทุก 10 นาที แล้วปรับเวลาเปิดวาล์วในรอบถัดไปตามค่าที่วัดได้ล่าสุด', en: 'Measuring soil moisture every 10 min and trimming the next valve period from that reading' },
        { th: 'ดูพยากรณ์อากาศล่วงหน้าแล้วตั้งเวลารดน้ำของวันพรุ่งนี้ให้สั้นลงเมื่อคาดว่าฝนจะตก', en: 'Reading the forecast and shortening tomorrow&rsquo;s watering when rain is expected' },
        { th: 'ตั้งเวลารดน้ำตามตารางที่คำนวณจากค่าการระเหยเฉลี่ยรายเดือนของพื้นที่เพาะปลูกนั้น', en: 'Scheduling from a table computed out of the area&rsquo;s monthly average evapotranspiration' }
      ],
      answer: 1,
      explain: {
        th: 'เกณฑ์เดียวคือ “ค่าที่วัดได้จากผลลัพธ์ย้อนกลับมามีอิทธิพลต่อคำสั่งหรือไม่” ข้อ A บันทึกข้อมูลแต่ไม่นำกลับมาใช้สั่งงาน ข้อ C เป็นการป้อนไปข้างหน้าเพราะวัดสิ่งรบกวนไม่ใช่ผลลัพธ์ และข้อ D เป็นตารางคงที่',
        en: 'The only test is whether a measurement of the output returns to influence the command. A logs data but never acts on it; C is feedforward, since it measures the disturbance rather than the output; D is a fixed schedule.'
      }
    },
    {
      q: {
        th: 'โรงเรือนหนึ่งควบคุมอุณหภูมิด้วยพัดลม ข้อใดจับคู่ SP, PV และ MV ได้ถูกต้องทั้งสามตัว',
        en: 'A greenhouse controls temperature with a fan. Which assignment of SP, PV and MV is right throughout?'
      },
      options: [
        { th: 'SP คือความเร็วรอบพัดลม PV คืออุณหภูมิที่วัดได้ และ MV คือค่า 28 °C ที่ตั้งไว้', en: 'SP is the fan speed, PV the measured temperature, MV the 28 °C target' },
        { th: 'SP คือค่า 28 °C ที่ตั้งไว้ PV คือความเร็วรอบพัดลม และ MV คืออุณหภูมิที่วัดได้', en: 'SP is the 28 °C target, PV the fan speed, MV the measured temperature' },
        { th: 'SP คืออุณหภูมิที่วัดได้ PV คือค่า 28 °C ที่ตั้งไว้ และ MV คือความเข้มแสงอาทิตย์', en: 'SP is the measured temperature, PV the 28 °C target, MV the solar radiation' },
        { th: 'SP คือค่า 28 °C ที่ตั้งไว้ PV คืออุณหภูมิที่วัดได้ และ MV คือความเร็วรอบพัดลม', en: 'SP is the 28 °C target, PV the measured temperature, MV the fan speed' }
      ],
      answer: 3,
      explain: {
        th: 'จำง่าย ๆ ว่า SP คือสิ่งที่เราขอ PV คือสิ่งที่เกิดขึ้นจริง และ MV คือสิ่งที่เรา “หมุน” ได้ ความเข้มแสงอาทิตย์ไม่ใช่ MV เพราะเราสั่งมันไม่ได้ มันเป็นสิ่งรบกวน',
        en: 'Remember: SP is what we ask for, PV what actually happens, MV what we can turn. Solar radiation is not an MV because we cannot command it — it is a disturbance.'
      }
    },
    {
      q: {
        th: 'เครื่องจักรสี่เครื่องในโรงคัดบรรจุ เครื่องใดที่โจทย์การควบคุมเป็น “งานลำดับ” ชัดเจนที่สุด',
        en: 'In a packhouse, which machine&rsquo;s control problem is most clearly a sequence task?'
      },
      options: [
        { th: 'เครื่องปิดฝากล่องที่ต้องทำตามขั้น ลำเลียง → พับฝา → ติดเทป → ส่งออก ทุกกล่อง', en: 'A case sealer stepping through convey, fold, tape and eject on every box' },
        { th: 'สายพานหลักที่รักษาความเร็ว 0.4 m/s ให้คงที่แม้จำนวนผลไม้บนสายพานเปลี่ยนไป', en: 'The main belt holding 0.4 m/s steady as the fruit load on it varies' },
        { th: 'ระบบพ่นละอองน้ำที่ปรับอัตราการพ่นตามความชื้นสัมพัทธ์ในห้องเก็บผลผลิต', en: 'A humidifier trimming its spray rate to the storage room&rsquo;s relative humidity' },
        { th: 'ห้องเย็นที่รักษาอุณหภูมิไว้ที่ 12 °C โดยปรับกำลังคอมเพรสเซอร์ตามภาระความร้อน', en: 'A cold room holding 12 °C by trimming compressor power to the heat load' }
      ],
      answer: 0,
      explain: {
        th: 'สามข้อที่เหลือถามว่า “ปรับมากแค่ไหน” กับตัวแปรต่อเนื่อง ส่วนเครื่องปิดฝากล่องถามว่า “ตอนนี้อยู่ขั้นไหน และเมื่อไรจึงไปขั้นถัดไป” ซึ่งทุกเงื่อนไขเป็นจริงหรือเท็จ',
        en: 'The other three ask “how much?” about a continuous variable. The case sealer asks “which step am I on, and when do I advance?”, where every condition is simply true or false.'
      }
    },
    {
      q: {
        th: 'ระบบป้อนกลับหนึ่งมีอัตราขยายวงรอบ \\( K K_p = 9 \\) เมื่อเกิดสิ่งรบกวนที่ทำให้ผลลัพธ์ควรเพี้ยนไป 5 °C ผลที่เหลือจริงจะเป็นเท่าใด',
        en: 'A feedback loop has loop gain \\( K K_p = 9 \\). A disturbance that would shift the output by 5 °C leaves how much?'
      },
      options: [
        { th: 'เหลือ 0 °C พอดี เพราะระบบป้อนกลับขจัดผลของสิ่งรบกวนออกได้หมดเมื่อเข้าสถานะคงตัว', en: 'Exactly 0 °C, feedback removing the disturbance entirely once settled' },
        { th: 'ราว 4.5 °C เพราะอัตราขยายวงรอบลดผลของสิ่งรบกวนลงประมาณหนึ่งในสิบของค่าเดิม', en: 'About 4.5 °C, the loop gain removing roughly a tenth of the disturbance' },
        { th: 'ราว 0.5 °C เพราะผลของสิ่งรบกวนถูกหารด้วยหนึ่งบวกอัตราขยายวงรอบ', en: 'About 0.5 °C, the disturbance being divided by one plus the loop gain' },
        { th: 'ราว 0.56 °C เพราะผลของสิ่งรบกวนถูกหารด้วยอัตราขยายวงรอบโดยตรง', en: 'About 0.56 °C, the disturbance being divided by the loop gain itself' }
      ],
      answer: 2,
      explain: {
        th: 'ตัวหารคือ \\( 1 + K K_p = 10 \\) จึงเหลือ 0.5 °C ตัวเลือก D สะท้อนความผิดพลาดที่ลืมบวกหนึ่ง และตัวเลือก A คือความเข้าใจผิดสำคัญ เพราะตัวควบคุมสัดส่วนล้วนไม่เคยทำให้ความคลาดเคลื่อนเป็นศูนย์',
        en: 'The divisor is \\( 1 + K K_p = 10 \\), leaving 0.5 °C. Option D is the classic slip of forgetting the one, and option A is the key misconception: pure proportional control never drives the error to zero.'
      }
    },
    {
      q: {
        th: 'ตัวควบคุมอุณหภูมิที่ปรับอัตราขยายสูงขึ้นเรื่อย ๆ จนอุณหภูมิเริ่มแกว่งขึ้นลงรอบค่าเป้าหมาย คำอธิบายใดถูกต้อง',
        en: 'A temperature controller is given more and more gain until the temperature starts swinging about the target. Which explanation is right?'
      },
      options: [
        { th: 'ความคลาดเคลื่อนสถานะคงตัวเพิ่มขึ้นตามอัตราขยาย ทำให้ค่าที่วัดได้ห่างจากเป้าหมายมากขึ้น', en: 'Steady-state error grows with gain, pushing the measurement further from target' },
        { th: 'แอคชูเอเตอร์ทำงานเกินพิกัดจึงตอบสนองไม่เป็นเชิงเส้น ทำให้สัญญาณขาออกบิดเบี้ยวไป', en: 'The actuator saturates and responds nonlinearly, distorting the output signal' },
        { th: 'เซนเซอร์เริ่มอ่านค่าผิดเมื่ออัตราขยายสูง เพราะสัญญาณควบคุมรบกวนวงจรวัดโดยตรง', en: 'The sensor starts misreading at high gain, the control signal corrupting the measurement' },
        { th: 'การแก้ไขที่แรงมากมาถึงช้าเพราะมีความหน่วงในวงรอบ จึงกลายเป็นการซ้ำเติมความคลาดเคลื่อน', en: 'A strong correction arrives late because of loop delay, so it reinforces the error instead' }
      ],
      answer: 3,
      explain: {
        th: 'ความหน่วงในวงรอบคือต้นเหตุของการแกว่ง ตัวเลือก A ขัดกับสมการ (2.4) ซึ่งบอกว่าอัตราขยายที่สูงขึ้น <em>ลด</em> ความคลาดเคลื่อนสถานะคงตัว ส่วนตัวเลือก B เกิดขึ้นได้จริงแต่เป็นผลพลอยได้ ไม่ใช่กลไกที่ทำให้แกว่ง',
        en: 'Delay inside the loop is the mechanism. Option A contradicts equation (2.4), where more gain <em>reduces</em> steady-state error. Option B does occur, but as a side effect rather than the cause of the oscillation.'
      }
    },
    {
      q: {
        th: 'โรงเรือนแห่งหนึ่งติดเซนเซอร์วัดความเข้มแสงไว้ <em>นอก</em> อาคาร เพื่อสั่งเปิดช่องระบายอากาศทันทีที่แดดแรงขึ้น โดยยังมีเซนเซอร์อุณหภูมิภายในทำงานอยู่ด้วย ระบบนี้คือแบบใด',
        en: 'A greenhouse adds an <em>outdoor</em> radiation sensor to open the vents the moment the sun strengthens, while the indoor temperature sensor still works. What scheme is this?'
      },
      options: [
        { th: 'ระบบเปิดล้วน เพราะการสั่งงานเกิดจากค่าที่วัดนอกอาคาร ไม่ใช่ผลลัพธ์ที่ต้องการควบคุม', en: 'Purely open-loop, since the command comes from outside rather than the controlled output' },
        { th: 'ระบบป้อนกลับร่วมกับการป้อนไปข้างหน้า ซึ่งชดเชยสิ่งรบกวนก่อนที่ผลลัพธ์จะเปลี่ยน', en: 'Feedback combined with feedforward, compensating the disturbance before the output moves' },
        { th: 'ระบบป้อนกลับสองวงรอบซ้อนกัน เพราะมีเซนเซอร์สองตัวส่งค่ากลับมาที่ตัวควบคุมเดียวกัน', en: 'A двух-loop cascade, since two sensors report back to the same controller' },
        { th: 'ระบบควบคุมลำดับ เพราะช่องระบายอากาศถูกสั่งให้เปิดหรือปิดตามเงื่อนไขที่กำหนดไว้', en: 'Sequence control, since the vent is commanded open or closed on a defined condition' }
      ],
      answer: 1,
      explain: {
        th: 'การวัดสิ่งรบกวนโดยตรงแล้วชดเชยล่วงหน้าคือการป้อนไปข้างหน้าตามสมการ (2.5) และเมื่อยังมีเซนเซอร์ภายในเก็บกวาดความคลาดเคลื่อนที่เหลือ จึงเป็นระบบผสมซึ่งเป็นแนวปฏิบัติที่ดีที่สุด',
        en: 'Measuring the disturbance and compensating in advance is feedforward, equation (2.5); with the indoor sensor still mopping up the remaining error, the result is the combined scheme that is best practice.'
      }
    },
    {
      q: {
        th: 'ข้อใดเป็นเหตุผลที่ยอมรับได้ในทางวิศวกรรม ที่จะเลือกใช้ระบบเปิดแม้รู้ข้อจำกัดของมัน',
        en: 'Which is an engineering-defensible reason to choose open-loop despite knowing its limits?'
      },
      options: [
        { th: 'ต้องการความแม่นยำสูงมาก จึงควรลดจำนวนองค์ประกอบในวงรอบให้น้อยที่สุดเท่าที่ทำได้', en: 'Very high accuracy is wanted, so the loop should contain as few elements as possible' },
        { th: 'สิ่งรบกวนในระบบมีขนาดใหญ่ แต่เกิดขึ้นไม่บ่อย จึงยอมให้ผลลัพธ์เพี้ยนเป็นครั้งคราวได้', en: 'Disturbances are large but infrequent, so occasional deviation is tolerable' },
        { th: 'ยังไม่มีเซนเซอร์ที่วัดผลลัพธ์ที่เราสนใจได้จริงในราคาที่โครงการรับได้ เช่น รสชาติผลผลิต', en: 'No affordable sensor can measure the outcome we care about, such as flavour' },
        { th: 'ตัวระบบเปลี่ยนคุณสมบัติไปตามเวลา จึงไม่มีประโยชน์ที่จะวัดผลลัพธ์กลับมาเทียบอยู่แล้ว', en: 'The plant drifts over time, so measuring the output back serves no purpose anyway' }
      ],
      answer: 2,
      explain: {
        th: 'ถ้าวัดผลลัพธ์ไม่ได้ ก็ปิดวงรอบไม่ได้โดยหลักการ ส่วนอีกสามข้อ คือสิ่งรบกวนขนาดใหญ่ ความต้องการความแม่นยำสูง และการที่ตัวระบบเปลี่ยนคุณสมบัติไปตามเวลา ล้วนเป็นเหตุผลที่ <em>บังคับ</em> ให้ต้องใช้ระบบปิด โดยเฉพาะข้อหลังสุด เพราะการเปลี่ยนคุณสมบัติของตัวระบบคือสิ่งที่การป้อนกลับจัดการได้ดีที่สุด',
        en: 'If you cannot measure the outcome, you cannot close the loop at all. The other three — large disturbances, a demand for high accuracy, and a plant that drifts — are precisely the reasons that <em>force</em> a closed loop, the last of them most of all, since drift is exactly what feedback handles best.'
      }
    },
    {
      q: {
        th: 'ระบบผสมปุ๋ยควบคุมค่า EC ที่ 1.8 mS/cm แต่หัววัดคอนดักทิวิตีมีตะกรันเกาะทำให้อ่านค่าต่ำกว่าจริง 0.3 mS/cm ผลที่เกิดขึ้นคือข้อใด',
        en: 'A fertigation loop holds EC at 1.8 mS/cm, but scale on the probe makes it read 0.3 mS/cm low. What happens?'
      },
      options: [
        { th: 'ระบบจะจ่ายปุ๋ยมากเกินไป เพราะพยายามดันค่าที่อ่านได้ขึ้นมาถึงเป้าหมายที่ตั้งไว้', en: 'The loop over-doses, trying to drive the reading up to the setpoint it was given' },
        { th: 'ระบบจะยังคุมค่าได้ถูกต้อง เพราะการป้อนกลับชดเชยความคลาดเคลื่อนของเซนเซอร์ให้เอง', en: 'The loop still holds correctly, since feedback compensates for the sensor&rsquo;s own error' },
        { th: 'ระบบจะเริ่มแกว่งรอบค่าเป้าหมาย เพราะค่าที่อ่านได้ไม่สอดคล้องกับสภาพจริงของสารละลาย', en: 'The loop starts oscillating, the reading no longer matching the real solution' },
        { th: 'ระบบจะจ่ายปุ๋ยน้อยลง เพราะค่าที่อ่านได้ต่ำทำให้ตัวควบคุมคิดว่าความคลาดเคลื่อนลดลงแล้ว', en: 'The loop doses less, since a low reading tells the controller the error has shrunk' }
      ],
      answer: 0,
      explain: {
        th: 'ตัวเลือก B คือความเข้าใจผิดที่สำคัญที่สุดของบทนี้: การป้อนกลับชดเชย <em>สิ่งรบกวนที่กระทำต่อกระบวนการ</em> ได้ แต่ชดเชยความคลาดเคลื่อนของตัวเซนเซอร์เองไม่ได้เลย เพราะระบบเชื่อเซนเซอร์เป็นความจริงเสมอ ผลคือสารละลายจริงจะเข้มขึ้นจนถึง 2.1 mS/cm',
        en: 'Option B is the most important misconception in this chapter: feedback corrects <em>disturbances acting on the process</em> but can never correct the sensor itself, which it treats as truth. The real solution therefore ends up at 2.1 mS/cm.'
      }
    }
  ]
});

AMRQuiz.mount('ch02-post', {
  type: 'post',
  chapter: 'ch02',
  title: { th: 'แบบทดสอบหลังเรียน — บทที่ 2', en: 'Post-test — Chapter 2' },
  intro: {
    th: 'สิบข้อ เน้นการคำนวณ การวินิจฉัย และการตัดสินใจเชิงออกแบบ เกณฑ์ผ่าน 70%',
    en: 'Ten items on calculation, diagnosis and design judgement. Pass mark 70%.'
  },
  questions: [
    {
      q: {
        th: 'โรงเรือนมี \\( K = 1 \\) °C ต่อหนึ่งหน่วยคำสั่ง ตั้งเป้า \\( r = 30 \\) °C เหนืออุณหภูมิฐาน และเกิดสิ่งรบกวน \\( d = -8 \\) °C ถ้าใช้ \\( K_p = 3 \\) ความคลาดเคลื่อนสถานะคงตัวที่เหลือเป็นเท่าใด',
        en: 'A greenhouse has \\( K = 1 \\) °C per command unit, a setpoint \\( r = 30 \\) °C above base, and a disturbance \\( d = -8 \\) °C. With \\( K_p = 3 \\), what steady-state error remains?'
      },
      options: [
        { th: 'ราว 0 °C เพราะที่สถานะคงตัวตัวควบคุมจะดันอุณหภูมิกลับถึงเป้าหมายได้พอดี', en: 'About 0 °C, since at steady state the controller pushes right back to target' },
        { th: 'ราว 8.0 °C เท่ากับขนาดของสิ่งรบกวน เพราะตัวควบคุมสัดส่วนไม่ลดผลของสิ่งรบกวน', en: 'About 8.0 °C, the full disturbance, since proportional control does not attenuate it' },
        { th: 'ราว 2.7 °C เพราะผลของสิ่งรบกวนถูกหารด้วยหนึ่งบวกอัตราขยายวงรอบ', en: 'About 2.7 °C, the disturbance divided by one plus the loop gain' },
        { th: 'ราว 2.0 °C เพราะผลของสิ่งรบกวนถูกหารด้วยอัตราขยายของตัวควบคุมโดยตรง', en: 'About 2.0 °C, the disturbance divided by the controller gain alone' }
      ],
      answer: 2,
      explain: {
        th: 'จากสมการ (2.4) ส่วนที่มาจากสิ่งรบกวนคือ \\( 8/(1 + 1 \\times 3) = 2.0 \\) °C เมื่อรวมกับส่วนที่เกิดจากการติดตามเป้าหมายจะได้ราว 2.7 °C ประเด็นหลักที่ต้องจับให้ได้คือตัวหารเป็น \\( 1 + K K_p \\) ไม่ใช่ \\( K_p \\) และไม่เคยเป็นศูนย์',
        en: 'From equation (2.4) the disturbance contributes \\( 8/(1 + 1 \\times 3) = 2.0 \\) °C, and with the tracking term the total is about 2.7 °C. The essential point is that the divisor is \\( 1 + K K_p \\), not \\( K_p \\), and is never zero.'
      }
    },
    {
      q: {
        th: 'หัวน้ำหยดในแปลงหนึ่งอุดตันบางส่วนทำให้อัตราการไหลลดลง 25% ระบบใดที่ยังรักษาความชื้นดินไว้ได้ใกล้เป้าหมาย และเพราะเหตุใด',
        en: 'Drip emitters partially clog and flow falls 25%. Which scheme still holds soil moisture near target, and why?'
      },
      options: [
        { th: 'ระบบที่วัดความชื้นดิน เพราะเห็นว่าค่ายังไม่ถึงเป้าหมายจึงยืดเวลาเปิดวาล์วชดเชยให้เอง', en: 'The moisture-based scheme, since it sees the shortfall and lengthens the valve period itself' },
        { th: 'ทั้งสองระบบเท่ากัน เพราะการอุดตันเป็นการเปลี่ยนที่ตัวระบบ ไม่ใช่สิ่งรบกวนจากภายนอก', en: 'Both equally, since clogging changes the plant rather than being an external disturbance' },
        { th: 'ทั้งสองระบบไม่ได้เลย เพราะไม่มีเซนเซอร์ตัวใดวัดอัตราการไหลที่ลดลงนี้ได้โดยตรง', en: 'Neither, since no sensor here measures the reduced flow rate directly' },
        { th: 'ระบบตั้งเวลา เพราะเวลาเปิดวาล์วที่กำหนดไว้ล่วงหน้าไม่เปลี่ยนไปตามสภาพของหัวน้ำหยด', en: 'The timer, since its preset valve period does not change with the emitters&rsquo; condition' }
      ],
      answer: 0,
      explain: {
        th: 'ตัวเลือก C เป็นกับดักที่ดี: ระบบปิดไม่จำเป็นต้องวัด <em>สาเหตุ</em> เลย มันวัด <em>ผลลัพธ์</em> ที่เราสนใจ คือความชื้นดิน แล้วแก้ไขจากความคลาดเคลื่อนที่เห็น ส่วนข้อ B ถูกที่ว่าการอุดตันคือการเปลี่ยนของตัวระบบ แต่สรุปผิดว่าสองระบบรับมือได้เท่ากัน',
        en: 'Option C is a good trap: a closed loop never needs to measure the <em>cause</em>. It measures the <em>outcome</em> it cares about — soil moisture — and corrects from the error it sees. C is right that clogging is plant drift, but wrong that both schemes cope equally.'
      }
    },
    {
      q: {
        th: 'เครื่องคัดขนาดมะม่วงใช้ลิมิตสวิตช์และกระบอกลมผลักผลไม้ลงราง ขณะที่ห้องเย็นข้างกันรักษาอุณหภูมิ 12 °C ข้อสรุปใดถูกต้อง',
        en: 'A mango grader uses limit switches and cylinders to divert fruit, while the cold room beside it holds 12 °C. Which conclusion is right?'
      },
      options: [
        { th: 'ทั้งสองเป็นงานควบคุมกระบวนการ เพราะทั้งคู่ทำงานต่อเนื่องตลอดเวลาที่โรงงานเปิด', en: 'Both are process control, since both run continuously while the plant is open' },
        { th: 'เครื่องคัดเป็นงานกระบวนการ เพราะต้องวัดขนาดผลไม้ซึ่งเป็นค่าต่อเนื่อง ส่วนห้องเย็นเป็นงานลำดับ', en: 'The grader is process control, since fruit size is continuous, and the cold room is sequence' },
        { th: 'ทั้งสองเป็นงานควบคุมลำดับ เพราะต่างก็มีเงื่อนไขกำหนดว่าอุปกรณ์จะทำงานเมื่อใด', en: 'Both are sequence control, since each has conditions deciding when a device acts' },
        { th: 'เครื่องคัดเป็นงานลำดับ ห้องเย็นเป็นงานกระบวนการ และวิศวกรคนเดียวต้องออกแบบทั้งคู่', en: 'The grader is sequence, the cold room process, and one engineer must design both' }
      ],
      answer: 3,
      explain: {
        th: 'ตัวเลือก B ชวนให้สับสนเพราะขนาดผลไม้เป็นค่าต่อเนื่องจริง แต่สิ่งที่ถูก <em>ควบคุม</em> ไม่ใช่ขนาด เป็นการตัดสินใจผลักหรือไม่ผลักซึ่งเป็นค่าไม่ต่อเนื่อง การจำแนกดูที่ตัวแปรที่ควบคุม ไม่ใช่ตัวแปรที่วัด',
        en: 'Option B is tempting because fruit size really is continuous — but what is <em>controlled</em> is not the size; it is the discrete decision to push or not. Classification follows the controlled variable, not the measured one.'
      }
    },
    {
      q: {
        th: 'ในแอนิเมชัน 2.2 เมื่อใส่สิ่งรบกวนแล้วเพิ่ม \\( K_p \\) จาก 2 เป็น 6 สิ่งที่สังเกตได้ในกราฟคือข้อใด',
        en: 'In Animation 2.2, with the disturbance applied, raising \\( K_p \\) from 2 to 6 produces what on the plot?'
      },
      options: [
        { th: 'เส้นระบบเปิดขยับขึ้นใกล้เป้าหมายมากขึ้น ส่วนเส้นระบบปิดอยู่ที่เดิมเพราะถูกจำกัดด้วยสิ่งรบกวน', en: 'The open-loop trace rises toward target while the closed-loop one stays, capped by the disturbance' },
        { th: 'เส้นระบบปิดเข้าใกล้เป้าหมายมากขึ้นราวสองเท่า ส่วนเส้นระบบเปิดไม่ขยับเลยเพราะคำสั่งคงที่', en: 'The closed-loop trace closes on target about twofold while the open-loop one does not move at all' },
        { th: 'เส้นทั้งสองขยับขึ้นใกล้เป้าหมายพอกัน เพราะอัตราขยายมีผลต่อทั้งสองระบบในสัดส่วนเดียวกัน', en: 'Both traces rise toward target equally, gain affecting the two in the same proportion' },
        { th: 'เส้นระบบปิดแกว่งรุนแรงจนไม่เสถียร เพราะอัตราขยายที่ 6 เกินขีดจำกัดของแบบจำลองนี้', en: 'The closed-loop trace oscillates into instability, gain 6 exceeding this model&rsquo;s limit' }
      ],
      answer: 1,
      explain: {
        th: 'ระบบเปิดสั่งค่าคงที่ที่สอบเทียบไว้ตอนไม่มีสิ่งรบกวน จึงไม่ตอบสนองต่อ \\( K_p \\) เลย ส่วนระบบปิดมีตัวหาร \\( 1 + K K_p \\) เปลี่ยนจาก 3 เป็น 7 ความคลาดเคลื่อนจึงลดลงราวสองเท่ากว่า ส่วนข้อ D ไม่เกิดเพราะแบบจำลองอันดับหนึ่งไม่มีความหน่วงมากพอ',
        en: 'The open loop issues the fixed command calibrated with no disturbance, so it ignores \\( K_p \\) entirely. The closed loop&rsquo;s divisor \\( 1 + K K_p \\) goes from 3 to 7, cutting the error more than twofold. D does not happen: a first-order model lacks the delay needed for instability.'
      }
    },
    {
      q: {
        th: 'ตัวควบคุมป้อนไปข้างหน้าในโรงเรือนถูกตั้งค่าจากแบบจำลองที่สมมติว่าหลังคาสะอาด แต่ผ่านไปหนึ่งปีหลังคาเริ่มมีฝุ่นเกาะจนแสงส่องผ่านน้อยลง 20% ผลที่ตามมาคือข้อใด',
        en: 'A greenhouse feedforward term was tuned on a model assuming a clean roof. A year later dust cuts light transmission by 20%. What follows?'
      },
      options: [
        { th: 'การชดเชยจะมากเกินความจำเป็น และระบบป้อนกลับที่ทำงานร่วมกันจะเก็บกวาดส่วนเกินนั้นให้', en: 'Compensation becomes excessive, and the feedback term working alongside it mops up the surplus' },
        { th: 'การชดเชยจะน้อยกว่าที่ควร และระบบจะตรวจพบความผิดพลาดนี้เองจากค่าที่วัดนอกอาคาร', en: 'Compensation falls short, and the system detects its own mistake from the outdoor reading' },
        { th: 'การชดเชยจะยังถูกต้อง เพราะเซนเซอร์วัดแสงอยู่นอกอาคารจึงไม่ได้รับผลจากฝุ่นบนหลังคา', en: 'Compensation stays correct, since the sensor is outdoors and unaffected by roof dust' },
        { th: 'การชดเชยจะหยุดทำงาน เพราะค่าที่วัดได้เบี่ยงเบนไปจากช่วงที่แบบจำลองถูกสอบเทียบไว้', en: 'Compensation ceases, the readings having left the range the model was calibrated over' }
      ],
      answer: 0,
      explain: {
        th: 'เซนเซอร์ภายนอกยังอ่านแสงได้ถูกต้อง แต่ <em>แบบจำลอง</em> ที่แปลงแสงภายนอกเป็นความร้อนภายในนั้นผิดไปแล้ว การชดเชยจึงเกินจริง จุดสำคัญคือป้อนไปข้างหน้าไม่รู้ตัวว่าผิด ความสามารถในการตรวจจับความผิดพลาดของตัวเองเป็นคุณสมบัติของการป้อนกลับเท่านั้น',
        en: 'The outdoor sensor still reads light correctly, but the <em>model</em> mapping outdoor light to indoor heat is now wrong, so compensation overshoots. Crucially, feedforward never notices its own error — self-detection belongs to feedback alone.'
      }
    },
    {
      q: {
        th: 'ฟาร์มหนึ่งเปลี่ยนจากระบบรดน้ำตั้งเวลาเป็นระบบที่วัดความชื้นดิน แต่ติดเซนเซอร์ไว้ที่โซนที่ดินระบายน้ำดีที่สุดเพียงจุดเดียว ความเสี่ยงที่สำคัญที่สุดคือข้อใด',
        en: 'A farm moves from a timer to moisture-based irrigation, but places its single sensor in the best-draining zone. What is the most serious risk?'
      },
      options: [
        { th: 'ระบบจะไม่สามารถคำนวณความคลาดเคลื่อนได้ เพราะต้องมีค่าวัดอย่างน้อยสองจุดจึงจะเปรียบเทียบได้', en: 'It cannot compute an error at all, needing at least two points to compare' },
        { th: 'ระบบจะกลายเป็นระบบเปิดอีกครั้ง เพราะข้อมูลจากเซนเซอร์เพียงจุดเดียวไม่ถือเป็นการป้อนกลับ', en: 'The scheme reverts to open-loop, since one sensor&rsquo;s data does not constitute feedback' },
        { th: 'ระบบจะรดน้ำนานเกินไปสำหรับโซนอื่น เพราะจุดที่วัดแห้งเร็วกว่าพื้นที่ส่วนใหญ่ของแปลง', en: 'It over-waters the other zones, since the measured point dries faster than most of the field' },
        { th: 'ระบบจะแกว่งขึ้นลงรุนแรง เพราะเซนเซอร์จุดเดียวทำให้อัตราขยายวงรอบสูงเกินความจำเป็น', en: 'It swings heavily, one sensor making the loop gain unnecessarily high' }
      ],
      answer: 2,
      explain: {
        th: 'ระบบจะควบคุม “สิ่งที่มันวัด” ได้ดีเสมอ ปัญหาคือสิ่งที่มันวัดไม่ได้เป็นตัวแทนของแปลงทั้งหมด ดินที่ระบายน้ำดีแห้งเร็วกว่า ระบบจึงสั่งรดน้ำบ่อยและนานเกินความต้องการของโซนที่ระบายน้ำช้า ซึ่งเสี่ยงรากเน่า',
        en: 'The loop will always control what it measures well; the trouble is that what it measures does not represent the field. Well-draining soil dries sooner, so the system waters more and longer than the slow-draining zones need, risking root rot.'
      }
    },
    {
      q: {
        th: 'ข้อใดเรียงชื่อสัญญาณตามเส้นทางรอบวงรอบปิดได้ถูกต้อง เริ่มจากค่าที่ผู้ใช้ตั้งไว้',
        en: 'Which sequence names the signals correctly around a closed loop, starting from the operator&rsquo;s setpoint?'
      },
      options: [
        { th: '\\( r \\to y_m \\to e \\to u \\to y \\)', en: '\\( r \\to y_m \\to e \\to u \\to y \\)' },
        { th: '\\( r \\to e \\to u \\to y \\to y_m \\)', en: '\\( r \\to e \\to u \\to y \\to y_m \\)' },
        { th: '\\( r \\to u \\to e \\to y_m \\to y \\)', en: '\\( r \\to u \\to e \\to y_m \\to y \\)' },
        { th: '\\( r \\to e \\to y \\to u \\to y_m \\)', en: '\\( r \\to e \\to y \\to u \\to y_m \\)' }
      ],
      answer: 1,
      explain: {
        th: 'ค่าที่ต้องการเข้าจุดเปรียบเทียบได้ \\( e \\) ผ่านตัวควบคุมได้ \\( u \\) ผ่านแอคชูเอเตอร์และกระบวนการได้ \\( y \\) แล้วผ่านเซนเซอร์กลับมาเป็น \\( y_m \\) ตัวเลือก A สลับที่ \\( y_m \\) ไปอยู่ก่อน \\( e \\) ซึ่งเป็นลำดับของ <em>รอบก่อนหน้า</em> ไม่ใช่เส้นทางเดียวกัน',
        en: 'The setpoint enters the comparator to give \\( e \\), the controller gives \\( u \\), the actuator and process give \\( y \\), and the sensor returns \\( y_m \\). Option A puts \\( y_m \\) before \\( e \\), which belongs to the <em>previous</em> trip around the loop, not this path.'
      }
    },
    {
      q: {
        th: 'ผู้ดูแลโรงเรือนบ่นว่า “ระบบคุมอุณหภูมิได้นิ่งมาก แต่พืชยังเสียหายจากความร้อนในช่วงบ่าย” ข้อใดอธิบายได้เป็นไปได้มากที่สุด',
        en: 'A grower says “the loop holds temperature beautifully, yet the crop still suffers heat damage in the afternoon”. What most likely explains it?'
      },
      options: [
        { th: 'สิ่งรบกวนในช่วงบ่ายมีขนาดใหญ่เกินกว่าที่ระบบป้อนกลับชนิดใดจะรับมือได้ตามหลักการ', en: 'The afternoon disturbance is simply beyond what any feedback scheme can handle in principle' },
        { th: 'ระบบใช้การป้อนไปข้างหน้าเพียงอย่างเดียว จึงไม่มีการตรวจสอบผลลัพธ์จริงที่เกิดขึ้นเลย', en: 'The scheme is feedforward only, so the real outcome is never checked at all' },
        { th: 'อัตราขยายของตัวควบคุมต่ำเกินไป ทำให้ความคลาดเคลื่อนสถานะคงตัวสูงในช่วงที่แดดแรง', en: 'Controller gain is too low, leaving a large steady-state error when the sun is strong' },
        { th: 'เซนเซอร์ติดตั้งในจุดที่ไม่เป็นตัวแทน เช่น ในที่ร่ม จึงอ่านค่าต่ำกว่าอุณหภูมิที่พืชได้รับจริง', en: 'The sensor sits in an unrepresentative spot, such as shade, reading below what the crop feels' }
      ],
      answer: 3,
      explain: {
        th: 'อาการ “คุมนิ่งแต่ผลลัพธ์จริงเสียหาย” เป็นลายเซ็นของการวัดผิดจุด ไม่ใช่การจูนผิด เพราะถ้าอัตราขยายต่ำจริง กราฟจะแกว่งหรือค้างห่างจากเป้าหมายให้เห็น ระบบที่นิ่งแปลว่ามันทำงานได้ดีกับ <em>ค่าที่มันเห็น</em> ปัญหาจึงอยู่ที่สิ่งที่มันเห็น',
        en: 'The signature of “holds well, yet reality is damaged” is measuring in the wrong place, not mistuning — a genuinely low gain would show as swinging or a visible offset. A steady loop means it is doing well on <em>what it sees</em>, so the problem is what it sees.'
      }
    },
    {
      q: {
        th: 'ต้องการควบคุมความชื้นในโรงเพาะเห็ดที่ต้องการค่านิ่งที่สุด โดยมีงบจำกัดให้เลือกลงทุนเพียงหนึ่งอย่าง ควรเลือกข้อใด',
        en: 'To hold humidity as steady as possible in a mushroom house, with budget for only one improvement, which do you choose?'
      },
      options: [
        { th: 'เปลี่ยนเซนเซอร์เป็นรุ่นที่แม่นยำกว่าและติดตั้งในจุดที่เป็นตัวแทนของพื้นที่เพาะได้ดีกว่า', en: 'A more accurate sensor, placed where it better represents the growing area' },
        { th: 'เปลี่ยนวาล์วพ่นหมอกเป็นรุ่นที่เปิด–ปิดได้เร็วขึ้น เพื่อให้ตอบสนองต่อคำสั่งได้ทันที', en: 'A faster-switching mist valve, so it responds to commands immediately' },
        { th: 'เพิ่มความถี่ในการสุ่มสัญญาณจากเซนเซอร์เป็นสิบเท่า เพื่อให้ตัวควบคุมเห็นข้อมูลถี่ขึ้น', en: 'Sampling the sensor ten times more often, so the controller sees data more frequently' },
        { th: 'เพิ่มอัตราขยายของตัวควบคุมเป็นสองเท่า เพราะลดความคลาดเคลื่อนสถานะคงตัวได้โดยไม่มีต้นทุน', en: 'Doubling the controller gain, since it cuts steady-state error at no cost' }
      ],
      answer: 0,
      explain: {
        th: 'เพดานของวงรอบคือคุณภาพของข้อมูลที่ป้อนเข้า การเพิ่มอัตราขยาย (ข้อ D) ฟรีจริงแต่เสี่ยงแกว่ง และสุ่มถี่ขึ้น (ข้อ C) ไม่สร้างข้อมูลที่เซนเซอร์ไม่เคยมี ส่วนข้อ B แก้ปัญหาที่ยังไม่ได้พิสูจน์ว่ามีอยู่',
        en: 'The loop is capped by the quality of its incoming data. More gain (A) is indeed free but risks oscillation; faster sampling (D) cannot create information the sensor never had; and C solves a problem not yet shown to exist.'
      }
    },
    {
      q: {
        th: 'ข้อใดสรุปข้อแลกเปลี่ยนระหว่างการป้อนกลับกับการป้อนไปข้างหน้าได้ถูกต้องที่สุด',
        en: 'Which best states the trade-off between feedback and feedforward?'
      },
      options: [
        { th: 'ป้อนกลับแม่นยำกว่าในทุกกรณี จึงไม่มีเหตุผลทางวิศวกรรมที่จะใช้การป้อนไปข้างหน้าร่วมด้วย', en: 'Feedback is more accurate in every case, so there is no reason to add feedforward' },
        { th: 'ป้อนไปข้างหน้าใช้ได้เฉพาะกับสิ่งรบกวนที่วัดไม่ได้ เพราะอาศัยการประมาณจากแบบจำลองล่วงหน้า', en: 'Feedforward applies only to unmeasurable disturbances, relying on a model&rsquo;s prediction' },
        { th: 'ป้อนกลับตอบสนองเร็วกว่าแต่ต้องมีแบบจำลอง ส่วนป้อนไปข้างหน้าช้ากว่าแต่ไม่ต้องใช้แบบจำลอง', en: 'Feedback is faster but needs a model; feedforward is slower but needs none' },
        { th: 'ป้อนกลับช้ากว่าเพราะต้องรอให้เกิดความคลาดเคลื่อน แต่ตรวจจับความผิดพลาดของตัวเองได้', en: 'Feedback is slower because it waits for an error, but it detects its own mistakes' }
      ],
      answer: 3,
      explain: {
        th: 'ตัวเลือก C สลับคุณสมบัติของสองวิธีทั้งคู่ ส่วนข้อ B ขัดกับนิยาม เพราะป้อนไปข้างหน้าต้อง <em>วัด</em> สิ่งรบกวนได้จึงจะทำได้ ระบบที่ดีในทางปฏิบัติใช้ทั้งสองร่วมกันตามสมการ (2.5)',
        en: 'Option C swaps both properties, and D contradicts the definition: feedforward requires the disturbance to be <em>measurable</em>. Good practice combines the two, as in equation (2.5).'
      }
    }
  ]
});
