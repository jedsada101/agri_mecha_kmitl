/* ==========================================================================
   Chapter 5 — pre-test and post-test items
   Written to the course item-writing rules: options parallel in form and
   length, distractors drawn from real misconceptions, and questions that ask
   the learner to diagnose, compute or specify rather than recall.
   Copyright (c) 2026 Jedsada Saijai.
   ========================================================================== */

AMRQuiz.mount('ch05-pre', {
  type: 'pre',
  chapter: 'ch05',
  title: { th: 'แบบทดสอบก่อนเรียน — บทที่ 5', en: 'Pre-test — Chapter 5' },
  intro: {
    th: 'สำรวจความรู้เดิมก่อนเริ่มบทเรียน เน้นการวินิจฉัยและการคำนวณ ไม่มีผลต่อคะแนนเก็บ',
    en: 'A diagnostic of prior knowledge, built around fault-finding and calculation. Not graded.'
  },
  questions: [
    {
      q: {
        th: 'ช่างต่อเซนเซอร์พร็อกซิมิตีแบบ PNP เข้ากับอินพุต PLC ที่ตั้งคอมมอนไว้ที่ +24 V ไฟที่ตัวเซนเซอร์ติดเมื่อมีวัตถุเข้าใกล้ แต่ไฟอินพุตที่ PLC ไม่ติด สาเหตุคือข้อใด',
        en: 'A PNP proximity sensor is wired to a PLC input whose common sits at +24 V. The sensor&rsquo;s own light comes on with a target, but the PLC input light does not. Why?'
      },
      options: [
        { th: 'เซนเซอร์เสียหายภายในจากการจ่ายแรงดันผิดขั้ว จึงส่งสัญญาณออกมาไม่ได้แม้ไฟจะติด', en: 'The sensor was damaged by reverse polarity and cannot output, though its light still works' },
        { th: 'ทั้งสองฝั่งพยายามจ่ายแรงดันบวกเข้าหากัน จึงไม่มีความต่างศักย์คร่อมวงจรอินพุต', en: 'Both ends try to push positive at each other, so no potential appears across the input' },
        { th: 'กระแสที่เซนเซอร์จ่ายได้ต่ำกว่ากระแสขั้นต่ำที่วงจรอินพุตของ PLC ต้องการใช้งาน', en: 'The sensor&rsquo;s output current is below the minimum the PLC input circuit needs' },
        { th: 'สายสัญญาณยาวเกินไปจนแรงดันตกคร่อมสาย ทำให้แรงดันที่ขั้วอินพุตไม่ถึงเกณฑ์', en: 'The signal cable is long enough that the voltage drop leaves the terminal below threshold' }
      ],
      answer: 1,
      explain: {
        th: 'เซนเซอร์ PNP ต้องคู่กับคอมมอนที่ 0 V เมื่อคอมมอนอยู่ที่ +24 V ทั้งสองปลายของวงจรอินพุตมีศักย์เท่ากัน จึงไม่มีกระแสไหล อาการนี้ไม่ทำให้อะไรเสียหาย ซึ่งเป็นเหตุผลที่ไฟของเซนเซอร์ยังติดอยู่ได้',
        en: 'A PNP sensor needs a 0 V common. With the common at +24 V both ends of the input circuit sit at the same potential and no current flows. Nothing is damaged, which is exactly why the sensor&rsquo;s own light still works.'
      }
    },
    {
      q: {
        th: 'ปั๊มน้ำสามเฟส 1.5 kW กินกระแสขณะทำงานปกติ 7 A ควรต่อเข้ากับเอาต์พุตของ PLC อย่างไร',
        en: 'A 1.5 kW three-phase pump draws 7 A in normal running. How should it connect to a PLC output?'
      },
      options: [
        { th: 'ต่อตรงเข้าเอาต์พุตรีเลย์ เพราะพิกัด 2 A ของรีเลย์ยังไม่ถึงกระแสของปั๊มที่ 7 A', en: 'Directly to a relay output, since its 2 A rating is below the pump&rsquo;s 7 A anyway' },
        { th: 'ต่อตรงเข้าเอาต์พุตทรานซิสเตอร์ เพราะสลับได้เร็วและไม่มีหน้าสัมผัสให้สึกหรอ', en: 'Directly to a transistor output, which switches fast and has no contacts to wear' },
        { th: 'ต่อผ่านฟิวส์ที่พิกัดสูงกว่ากระแสปั๊มเล็กน้อย เพื่อป้องกันเอาต์พุตของ PLC เสียหาย', en: 'Through a fuse rated slightly above the pump current, protecting the PLC output' },
        { th: 'ต่อผ่านคอนแทกเตอร์ โดย PLC ขับเฉพาะคอยล์ซึ่งกินกระแสเพียงไม่กี่สิบมิลลิแอมป์', en: 'Through a contactor, the PLC energising only its coil at tens of milliamps' }
      ],
      answer: 3,
      explain: {
        th: 'ตัวเลือก A มีตรรกะกลับด้าน เพราะ 7 A มากกว่าพิกัด 2 A ไม่ใช่น้อยกว่า และกระแสตอนสตาร์ตสูงถึง 6–8 เท่าอีกด้วย ฟิวส์ (ข้อ C) ขาดหลังจากหน้าสัมผัสละลายติดไปแล้ว จึงไม่ได้ป้องกันสิ่งที่ต้องการ',
        en: 'Option A has the logic inverted: 7 A is above the 2 A rating, not below, and starting current is six to eight times higher again. A fuse (D) blows after the contacts have already welded, so it does not protect what matters.'
      }
    },
    {
      q: {
        th: 'โมดูลอนาล็อกให้ค่าดิบ 0–4,000 แทนช่วง 0–100 %VWC ขณะหนึ่งอ่านได้ 2,600 ความชื้นดินเป็นเท่าใด',
        en: 'An analogue module maps 0–4,000 raw onto 0–100 %VWC. A reading of 2,600 means what moisture?'
      },
      options: [
        { th: '65 %VWC จากการเทียบสัดส่วนระหว่างค่าดิบที่อ่านได้กับค่าดิบเต็มสเกลของโมดูล', en: '65 %VWC, by proportion between the count read and the module&rsquo;s full-scale count' },
        { th: '52 %VWC จากการเทียบค่าดิบกับช่วงกลางของพิสัย แล้วปรับตามความชันของเส้นสเกล', en: '52 %VWC, comparing the count with mid-range and adjusting for the scaling slope' },
        { th: '40 %VWC จากการหาส่วนต่างระหว่างค่าดิบเต็มสเกลกับค่าที่อ่านได้ แล้วเทียบสัดส่วน', en: '40 %VWC, taking the difference from full scale and scaling that proportionally' },
        { th: '26 %VWC จากการหารค่าดิบด้วยจำนวนขั้นเต็มสเกลแล้วคูณด้วยพิสัยของเซนเซอร์', en: '26 %VWC, dividing the count by full scale and multiplying by the sensor range' }
      ],
      answer: 0,
      explain: {
        th: 'ใช้สมการ (5.2): \\( 2600 \\times 100 / 4000 = 65 \\) %VWC ตัวเลือก D คือความผิดพลาดที่พบบ่อยจากการสลับที่ตัวหารกับตัวคูณ ส่วนตัวเลือก C คือการคิดกลับด้านทั้งหมด',
        en: 'By equation (5.2): \\( 2600 \\times 100 / 4000 = 65 \\) %VWC. Option D is the common slip of swapping the multiplier and divisor, while D inverts the whole relation.'
      }
    },
    {
      q: {
        th: 'เครื่องบรรจุนับจำนวนถุงสะสมไว้ในรีจิสเตอร์ 16 บิต โรงงานบรรจุวันละ 2,000 ถุง จะเกิดอะไรขึ้นและเมื่อใด',
        en: 'A bagger totalises into a 16-bit register at 2,000 bags a day. What happens, and when?'
      },
      options: [
        { th: 'ค่าจะยังถูกต้องอยู่ เพราะ PLC ขยายความกว้างของรีจิสเตอร์ให้เองเมื่อค่าใกล้เต็ม', en: 'It stays correct, the PLC widening the register automatically as the value nears full' },
        { th: 'ค่าจะหยุดเพิ่มที่ 32,767 และค้างอยู่ที่นั่น ทำให้ยอดสะสมนิ่งหลังผ่านไปราวสองสัปดาห์', en: 'The value sticks at 32,767 and stops rising, freezing the total after about two weeks' },
        { th: 'ค่าจะพลิกเป็นลบในสัปดาห์ที่สามโดยไม่มีสัญญาณเตือนใด ๆ จากตัว PLC เอง', en: 'It flips negative in the third week, with no warning from the PLC at all' },
        { th: 'ค่าจะถูกรีเซ็ตเป็นศูนย์โดยอัตโนมัติเมื่อถึงขีดจำกัด แล้วเริ่มนับใหม่จากต้น', en: 'It resets itself to zero at the limit and starts counting again from there' }
      ],
      answer: 2,
      explain: {
        th: 'รีจิสเตอร์ 16 บิตแบบมีเครื่องหมายเก็บได้ถึง 32,767 ที่ 2,000 ถุงต่อวันจะถึงใน 16 วัน แล้วพลิกเป็น −32,768 ข้อที่ว่าค่าจะค้างอยู่ที่ขีดจำกัด และข้อที่ว่าค่าจะรีเซ็ตเป็นศูนย์เอง ล้วนเป็นความเข้าใจผิดที่พบบ่อย เพราะ PLC ไม่ได้จำกัดค่าหรือรีเซ็ตให้เอง',
        en: 'A signed 16-bit register tops out at 32,767, reached in sixteen days at 2,000 a day, then wraps to −32,768. The option where the value sticks at the limit, and the one where it resets itself, are both frequent misconceptions: a PLC neither clamps nor resets for you.'
      }
    },
    {
      q: {
        th: 'ข้อมูลใดต่อไปนี้ <em>ไม่ควร</em> เก็บไว้ในหน่วยความจำแบบ retentive',
        en: 'Which of these should <em>not</em> be held in retentive memory?'
      },
      options: [
        { th: 'จำนวนรอบการทำงานสะสมของกระบอกลมที่ใช้เตือนเวลาเปลี่ยนซีล', en: 'The lifetime stroke count of a cylinder, used to call for a seal change' },
        { th: 'ยอดจำนวนลังที่บรรจุเสร็จแล้วในกะการทำงานปัจจุบัน', en: 'The number of crates completed so far in the current shift' },
        { th: 'ค่าเป้าหมายอุณหภูมิที่ผู้ดูแลป้อนผ่านหน้าจอเมื่อเริ่มฤดูปลูก', en: 'The temperature setpoint the grower entered on the HMI this season' },
        { th: 'สถานะขั้นปัจจุบันของลำดับการทำงานของเครื่องบรรจุที่กำลังเดินอยู่', en: 'The current step of the bagging sequence on a machine that is running' }
      ],
      answer: 3,
      explain: {
        th: 'ถ้าจำสถานะขั้นไว้ เครื่องจะเดินต่อทันทีที่ไฟมา ซึ่งอาจเกิดขึ้นตอนไม่มีใครอยู่ข้าง ๆ และกลไกค้างอยู่กลางจังหวะ มาตรฐานความปลอดภัยกำหนดให้การเริ่มใหม่หลังไฟดับต้องเป็นการกระทำโดยเจตนาของผู้ปฏิบัติงาน',
        en: 'Retaining the step means the machine moves the instant power returns, possibly with nobody present and the mechanism stopped mid-stroke. The standards require restart after an outage to be a deliberate operator action.'
      }
    },
    {
      q: {
        th: 'โปรแกรมสเกลสัญญาณเขียนว่า DIV D10 4000 ก่อน แล้วจึง MUL ผลลัพธ์ด้วย 500 ผลที่ได้จะเป็นอย่างไรเมื่อ D10 มีค่า 1,640',
        en: 'A scaling routine does DIV D10 4000 first, then MUL the result by 500. With D10 at 1,640, what comes out?'
      },
      options: [
        { th: 'ได้ 205 ซึ่งถูกต้อง เพราะการสลับลำดับการคูณและหารไม่มีผลต่อผลลัพธ์สุดท้าย', en: '205, which is correct, since swapping multiply and divide does not change the result' },
        { th: 'ได้ 0 เพราะการหารจำนวนเต็มตัดเศษทิ้ง ทำให้ผลลัพธ์กลางเป็นศูนย์ก่อนนำไปคูณ', en: '0, because integer division truncates, making the intermediate zero before the multiply' },
        { th: 'ได้ 164 เพราะผลลัพธ์กลางถูกปัดเป็นจำนวนเต็มที่ใกล้ที่สุดก่อนนำไปคูณต่อ', en: '164, because the intermediate is rounded to the nearest integer before multiplying' },
        { th: 'ได้ค่าติดลบ เพราะการหารด้วยตัวเลขที่ใหญ่กว่าทำให้เกิดการล้นของรีจิสเตอร์', en: 'A negative value, because dividing by a larger number overflows the register' }
      ],
      answer: 1,
      explain: {
        th: '\\( 1640/4000 = 0.41 \\) ซึ่งถูกตัดเศษเหลือ 0 แล้วคูณ 500 ได้ 0 ตัวเลือก C สะท้อนความเข้าใจผิดว่า PLC ปัดเศษ ทั้งที่คำสั่งหารจำนวนเต็มตัดเศษทิ้งเสมอ',
        en: '\\( 1640/4000 = 0.41 \\) truncates to 0, and zero times 500 is zero. Option C reflects the misconception that a PLC rounds, whereas integer division always truncates.'
      }
    },
    {
      q: {
        th: 'พัดลมห้องเย็นถูกสั่งให้เปิดเมื่ออุณหภูมิเกิน 12 °C และปิดเมื่อไม่เกิน 12 °C ผลที่สังเกตได้คือข้อใด',
        en: 'A cold-room fan is told to start above 12 °C and stop at or below 12 °C. What is observed?'
      },
      options: [
        { th: 'พัดลมทำงานปกติดี เพราะการใช้เกณฑ์เดียวเป็นวิธีมาตรฐานของการควบคุมแบบ ON–OFF', en: 'The fan behaves properly, one threshold being the standard way to do ON–OFF control' },
        { th: 'พัดลมเดินต่อเนื่องตลอดเวลา เพราะเงื่อนไขทั้งสองเป็นจริงพร้อมกันที่อุณหภูมิ 12 °C พอดี', en: 'The fan runs continuously, both conditions being true together at exactly 12 °C' },
        { th: 'พัดลมสลับเปิดปิดถี่มากเมื่ออุณหภูมิวนอยู่รอบเกณฑ์ ทำให้คอนแทกเตอร์สึกหรอเร็ว', en: 'The fan cycles rapidly whenever the temperature hovers at the threshold, wearing the contactor' },
        { th: 'พัดลมไม่ทำงานเลย เพราะเงื่อนไขปิดมีลำดับความสำคัญเหนือกว่าเงื่อนไขเปิดเสมอ', en: 'The fan never runs, the stop condition always taking priority over the start condition' }
      ],
      answer: 2,
      explain: {
        th: 'การเปิดพัดลมเองทำให้อุณหภูมิตกต่ำกว่าเกณฑ์ทันที เงื่อนไขปิดจึงเป็นจริงในรอบสแกนถัดไป แล้ววนเช่นนี้ไปเรื่อย ๆ ทางแก้คือใส่แถบตายตามสมการ (5.4) เช่น เปิดที่ 12 °C ปิดที่ 10 °C',
        en: 'Running the fan itself drops the temperature below the threshold, so the stop condition is true on the very next scan, and round it goes. The fix is the deadband of equation (5.4): start at 12 °C, stop at 10 °C.'
      }
    },
    {
      q: {
        th: 'ตารางสัญลักษณ์ตั้งชื่ออินพุตของปุ่มหยุดฉุกเฉินที่เดินสายแบบ NC ว่าอะไรจึงจะลดโอกาสเขียนตรรกะผิด',
        en: 'In a symbol table, what name for a normally-closed E-stop input best reduces the chance of writing the logic backwards?'
      },
      options: [
        { th: '<code>ES_OK</code> เพราะสื่อว่าบิตเป็น 1 เมื่อวงจรยังปลอดภัย ตรงกับพฤติกรรมจริงของสาย NC', en: '<code>ES_OK</code>, which says the bit is 1 while the circuit is safe, matching how NC wiring behaves' },
        { th: '<code>X0_INPUT</code> เพราะอ้างอิงแอดเดรสจริงโดยตรง จึงไม่มีทางสับสนกับจุดต่ออื่น', en: '<code>X0_INPUT</code>, which references the real address and cannot be confused' },
        { th: '<code>NOT_E_STOP</code> เพราะบอกชัดว่าต้องกลับลอจิกก่อนนำบิตนี้ไปใช้ในบรรทัดถัดไป', en: '<code>NOT_E_STOP</code>, which states that the bit must be inverted before use in the next rung' },
        { th: '<code>E_STOP</code> เพราะสื่อตรงไปตรงมาว่าอินพุตนี้มาจากปุ่มหยุดฉุกเฉินตัวใด', en: '<code>E_STOP</code>, which says plainly which field device this input comes from' }
      ],
      answer: 0,
      explain: {
        th: 'ชื่อที่ดีบอกสถานะของบิต ไม่ใช่ชื่ออุปกรณ์ เพราะสาย NC ทำให้บิตเป็น 1 ตอนยังไม่ถูกกด ตัวเลือก C แม้จะไม่ผิดทางตรรกะแต่บังคับให้ผู้อ่านต้องคิดกลับด้านทุกครั้งที่เห็น ซึ่งเป็นแหล่งของความผิดพลาดในตัวมันเอง',
        en: 'A good name states the bit&rsquo;s condition rather than the device, since NC wiring leaves the bit at 1 while unpressed. Option C is not logically wrong, but it forces the reader to invert mentally every time, which is itself a source of error.'
      }
    }
  ]
});

AMRQuiz.mount('ch05-post', {
  type: 'post',
  chapter: 'ch05',
  title: { th: 'แบบทดสอบหลังเรียน — บทที่ 5', en: 'Post-test — Chapter 5' },
  intro: {
    th: 'สิบข้อ เน้นการวินิจฉัยอาการหน้างาน การคำนวณการสเกล และการตัดสินใจเชิงออกแบบ เกณฑ์ผ่าน 70%',
    en: 'Ten items on site fault-finding, scaling calculations and design judgement. Pass mark 70%.'
  },
  questions: [
    {
      q: {
        th: 'เซนเซอร์ตัวใหม่ถูกเปลี่ยนเข้าไปแทนตัวเดิมที่เสีย หลังเปลี่ยนแล้วไฟอินพุตไม่ติดเลยทั้งที่เซนเซอร์ทำงาน ควรตรวจอะไรเป็นอันดับแรก',
        en: 'A replacement sensor goes in, and afterwards the input light never comes on although the sensor works. What do you check first?'
      },
      options: [
        { th: 'ตรวจว่าโมดูลอินพุตเสียหายจากการถอดเปลี่ยนขณะที่ระบบยังจ่ายไฟอยู่หรือไม่', en: 'Whether the input module was damaged by hot-swapping while the system was powered' },
        { th: 'ตรวจว่าโปรแกรมใน PLC ยังอ้างอิงแอดเดรสอินพุตเดิมอยู่หรือไม่ หลังจากที่มีการแก้ไขล่าสุด', en: 'Whether the program still references the same input address after the last edit' },
        { th: 'ตรวจว่าเซนเซอร์ตัวใหม่เป็นชนิดเดียวกับตัวเดิม คือ PNP หรือ NPN และคอมมอนต่อตรงกันหรือไม่', en: 'Whether the new sensor is the same type, PNP or NPN, and the common still matches it' },
        { th: 'ตรวจว่าแรงดันจากแหล่งจ่าย 24 V ยังอยู่ในพิกัดที่ยอมรับได้ภายใต้ภาระของทั้งตู้', en: 'Whether the 24 V supply is still within tolerance under the cabinet&rsquo;s full load' }
      ],
      answer: 2,
      explain: {
        th: 'อาการ “เซนเซอร์ทำงานแต่ไฟอินพุตเงียบสนิท” หลังการเปลี่ยนอะไหล่ คือลายเซ็นของการสลับชนิด PNP/NPN ซึ่งเป็นสาเหตุที่พบบ่อยที่สุดและตรวจได้เร็วที่สุด อีกสามข้อเป็นไปได้จริงแต่ควรอยู่ลำดับหลัง',
        en: 'The symptom “the sensor works but the input is utterly silent” straight after a parts change is the signature of a swapped PNP/NPN type — the likeliest cause and the fastest to check. The other three are genuinely possible but belong later in the order.'
      }
    },
    {
      q: {
        th: 'โมดูลอนาล็อกของ Siemens ให้ค่าดิบ 0–27,648 สำหรับสัญญาณ 4–20 mA ที่แทนค่า EC 0–5,000 µS/cm หากอ่านค่าดิบได้ 11,059 ค่า EC เป็นเท่าใด',
        en: 'A Siemens module maps 4–20 mA onto 0–27,648 raw, representing EC from 0 to 5,000 µS/cm. A raw value of 11,059 means what EC?'
      },
      options: [
        { th: 'ราว 2,000 µS/cm จากการเทียบสัดส่วนค่าดิบกับค่าเต็มสเกลแล้วคูณด้วยพิสัยของเซนเซอร์', en: 'About 2,000 µS/cm, by proportion of raw to full scale times the sensor range' },
        { th: 'ราว 2,765 µS/cm จากการเทียบค่าดิบกับครึ่งหนึ่งของพิสัยเต็มสเกลของโมดูลอนาล็อก', en: 'About 2,765 µS/cm, comparing the raw value with half the module&rsquo;s full-scale range' },
        { th: 'ราว 3,000 µS/cm จากการหักค่าดิบที่จุดเริ่มต้นออกก่อนแล้วจึงเทียบสัดส่วนที่เหลือ', en: 'About 3,000 µS/cm, subtracting the zero-point count first and scaling what remains' },
        { th: 'ราว 1,000 µS/cm จากการเทียบสัดส่วนค่าดิบกับค่าเต็มสเกลแล้วคูณด้วยพิสัยของเซนเซอร์', en: 'About 1,000 µS/cm, by proportion of raw to full scale times the sensor range' }
      ],
      answer: 0,
      explain: {
        th: '\\( 11059 \\times 5000 / 27648 \\approx 2000 \\) µS/cm ตัวเลือก D คือการคำนวณผิดด้วยตัวประกอบสิบซึ่งพบบ่อยเมื่อสับสนหน่วย ส่วนตัวเลือก C ใช้ได้เฉพาะกรณีที่ค่าดิบเริ่มที่ค่าอื่นที่ไม่ใช่ศูนย์',
        en: '\\( 11059 \\times 5000 / 27648 \\approx 2000 \\) µS/cm. Option D is a factor-of-ten slip, common when units get muddled, and option C would only apply if the raw range started somewhere other than zero.'
      }
    },
    {
      q: {
        th: 'ในแอนิเมชัน 5.1 เมื่อใช้เซนเซอร์ NPN กับคอมมอนที่ 0 V ผลลัพธ์เหมือนกับกรณีใด และเพราะเหตุใด',
        en: 'In Animation 5.1, an NPN sensor with the common at 0 V behaves like which other case, and why?'
      },
      options: [
        { th: 'เหมือนกรณี NPN กับคอมมอน +24 V เพราะชนิดของเซนเซอร์เป็นตัวกำหนดผลลัพธ์เพียงอย่างเดียว', en: 'Like NPN with a +24 V common, the sensor type alone determining the outcome' },
        { th: 'ไม่เหมือนกรณีใด เพราะเป็นการต่อที่ทำให้เกิดกระแสไหลย้อนและอาจทำให้โมดูลเสียหาย', en: 'Like none of them, since this pairing creates a reverse current that can damage the module' },
        { th: 'เหมือนกรณี PNP กับคอมมอน 0 V เพราะทั้งสองกรณีมีเส้นทางให้กระแสไหลครบวงจรเหมือนกัน', en: 'Like PNP with a 0 V common, both having a complete path for current' },
        { th: 'เหมือนกรณี PNP กับคอมมอน +24 V เพราะทั้งสองกรณีไม่มีวงจรให้กระแสไหลได้เลย', en: 'Like PNP with a +24 V common, neither having any loop for current at all' }
      ],
      answer: 3,
      explain: {
        th: 'ทั้งสองกรณีคือการจับคู่ผิดชนิด จึงไม่มีความต่างศักย์คร่อมวงจรอินพุตและไม่มีอะไรเกิดขึ้น ข้อ A เป็นกับดักที่ดีเพราะชวนให้คิดว่าชนิดเซนเซอร์สำคัญกว่า ทั้งที่สิ่งที่กำหนดผลคือ <em>ความเข้ากันของทั้งคู่</em>',
        en: 'Both are mismatched pairings, so no potential appears across the input and nothing happens. Option A is a good trap: it suggests the sensor type alone decides, when what decides is <em>the compatibility of the pair</em>.'
      }
    },
    {
      q: {
        th: 'ผู้ดูแลโรงเรือนบ่นว่าต้องป้อนค่าเป้าหมายอุณหภูมิใหม่ทุกเช้าหลังจากไฟดับกลางคืน ควรแก้ที่ใด',
        en: 'A grower complains of re-entering the temperature setpoint every morning after an overnight outage. What should change?'
      },
      options: [
        { th: 'เปลี่ยนไปใช้หน้าจอ HMI รุ่นที่มีหน่วยความจำในตัว เพื่อให้จำค่าที่ผู้ใช้ป้อนไว้ได้เอง', en: 'Fit an HMI with its own memory so it remembers what the operator typed' },
        { th: 'ย้ายค่าเป้าหมายไปเก็บในรีจิสเตอร์แบบ retentive เพื่อให้ค่าคงอยู่เมื่อไฟกลับมา', en: 'Move the setpoint into a retentive register so it survives the power cut' },
        { th: 'เพิ่มขนาดของรีจิสเตอร์ที่เก็บค่าเป้าหมายจาก 16 บิตเป็น 32 บิตเพื่อกันการล้มหายของข้อมูล', en: 'Widen the setpoint register from 16 to 32 bits to stop the data being lost' },
        { th: 'ตั้งค่าเริ่มต้นของโปรแกรมให้เขียนค่าเป้าหมายมาตรฐานลงรีจิสเตอร์ทุกครั้งที่จ่ายไฟใหม่', en: 'Have the program write a standard default setpoint into the register at every power-up' }
      ],
      answer: 1,
      explain: {
        th: 'ตัวเลือก D ฟังดูสมเหตุสมผลและทำได้จริง แต่จะเขียนทับค่าที่ผู้ใช้ตั้งไว้ทุกครั้ง ซึ่งแก้ปัญหาผิดจุด ส่วนความกว้างของรีจิสเตอร์ (ข้อ C) ไม่เกี่ยวกับการคงค่าเมื่อไฟดับเลย',
        en: 'Option D sounds sensible and is technically possible, but it overwrites whatever the operator chose, solving the wrong problem. Register width (B) has nothing to do with surviving a power cut.'
      }
    },
    {
      q: {
        th: 'ในแอนิเมชัน 5.3 เมื่อเพิ่มแถบตายจาก 0 เป็น 2 °C สิ่งที่เกิดขึ้นคือข้อใด',
        en: 'In Animation 5.3, widening the deadband from 0 to 2 °C does what?'
      },
      options: [
        { th: 'จำนวนครั้งการสลับลดลงมาก แต่อุณหภูมิแกว่งในช่วงที่กว้างขึ้นตามความกว้างของแถบตาย', en: 'Switching falls sharply, but the temperature now swings over a correspondingly wider band' },
        { th: 'จำนวนครั้งการสลับลดลงมาก และอุณหภูมิยังคงนิ่งเท่าเดิมเพราะพัดลมทำงานหนักขึ้นแทน', en: 'Switching falls sharply while the temperature stays as steady, the fan simply working harder' },
        { th: 'จำนวนครั้งการสลับเพิ่มขึ้น เพราะมีเกณฑ์ให้ตรวจสองค่าแทนที่จะเป็นค่าเดียวเหมือนเดิม', en: 'Switching rises, since there are now two thresholds to test instead of one' },
        { th: 'จำนวนครั้งการสลับไม่เปลี่ยน แต่พัดลมจะเดินนานขึ้นในแต่ละรอบที่ถูกสั่งให้ทำงาน', en: 'Switching is unchanged, but the fan runs longer in each cycle it is commanded on' }
      ],
      answer: 0,
      explain: {
        th: 'แถบตายคือการแลกความนิ่งของตัวแปรกับอายุของอุปกรณ์สวิตช์ ตัวเลือก B น่าสนใจแต่ขัดกับฟิสิกส์ เพราะถ้าอุณหภูมิยังนิ่งเท่าเดิมแปลว่าพัดลมต้องสลับบ่อยเท่าเดิม ไม่มีทางได้ทั้งสองอย่างพร้อมกัน',
        en: 'A deadband trades steadiness of the variable against the life of the switching device. Option B is tempting but contradicts the physics: if the temperature were as steady, the fan would have to switch as often. You cannot have both.'
      }
    },
    {
      q: {
        th: 'ต้องการวัดอุณหภูมิช่วง −10 ถึง 60 °C ด้วยโมดูลที่ให้ค่าดิบ 0–4,000 และต้องการความละเอียด 0.1 °C ข้อใดถูกต้อง',
        en: 'Measuring −10 to 60 °C on a module reading 0–4,000 raw, with 0.1 °C resolution wanted. Which is correct?'
      },
      options: [
        { th: 'ไม่สามารถทำได้ด้วยโมดูลนี้ เพราะค่าดิบเริ่มที่ศูนย์จึงแทนค่าอุณหภูมิติดลบไม่ได้', en: 'It cannot be done on this module, since a raw range starting at zero cannot represent negatives' },
        { th: 'ต้องเพิ่มความละเอียดของโมดูลเป็น 0–8,000 ก่อน เพราะพิสัย 70 องศาต้องการขั้นมากกว่าเดิม', en: 'The module must first be changed to 0–8,000, a 70-degree span needing more steps' },
        { th: 'ต้องเก็บผลลัพธ์ในรีจิสเตอร์ที่รองรับค่าติดลบ และค่าที่เก็บจะอยู่ในช่วง −100 ถึง 600', en: 'The result register must accept negatives, holding values from −100 to 600' },
        { th: 'ต้องเก็บผลลัพธ์ในรีจิสเตอร์ไม่มีเครื่องหมาย แล้วบวกออฟเซต 100 ก่อนแสดงผลบนหน้าจอ', en: 'The result must go in an unsigned register with an offset of 100 added before display' }
      ],
      answer: 2,
      explain: {
        th: 'ใช้สมการ (5.2) โดยตั้ง \\( y_{\\min} = -100 \\) และ \\( y_{\\max} = 600 \\) ในหน่วย 0.1 °C ค่าดิบที่ศูนย์จึงแทน −10 °C ได้สบาย ส่วนความละเอียดก็พอ เพราะ \\( 700/4000 = 0.175 \\) ขั้นต่อหน่วย 0.1 °C ซึ่งละเอียดกว่าที่ต้องการ',
        en: 'Equation (5.2) with \\( y_{\\min} = -100 \\) and \\( y_{\\max} = 600 \\) in units of 0.1 °C handles it: a raw zero simply represents −10 °C. Resolution is ample too, since \\( 700/4000 = 0.175 \\) units of 0.1 °C per count.'
      }
    },
    {
      q: {
        th: 'โรงคัดบรรจุมีเซนเซอร์ NPN เดิมอยู่สามตัวที่ต้องใช้ต่อ ส่วนที่เหลือทั้งโรงเป็น PNP แนวทางใดดีที่สุด',
        en: 'A packhouse must keep three existing NPN sensors while the rest of the plant is PNP. What is the best approach?'
      },
      options: [
        { th: 'แยกคอมมอนของการ์ดอินพุตออกเป็นสองกลุ่ม กลุ่มหนึ่งต่อ 0 V อีกกลุ่มต่อ +24 V ตามชนิด', en: 'Split the input card&rsquo;s commons into two groups, one at 0 V and one at +24 V' },
        { th: 'ใส่รีเลย์อินเทอร์เฟซคั่นให้เซนเซอร์ NPN สามตัว เพื่อให้ทั้งตู้ใช้มาตรฐานเดียวกันหมด', en: 'Insert interface relays for the three NPN sensors, so the whole cabinet keeps one standard' },
        { th: 'กลับลอจิกของอินพุตทั้งสามจุดในโปรแกรม เพื่อชดเชยทิศทางสัญญาณที่ตรงข้ามกัน', en: 'Invert the logic of those three inputs in the program to compensate for the opposite signal' },
        { th: 'ใช้ตัวต้านทานพูลอัปต่อที่ขั้วอินพุตทั้งสามจุด เพื่อให้สัญญาณเข้ากันได้กับการ์ดเดิม', en: 'Fit pull-up resistors at those three terminals so the signals suit the existing card' }
      ],
      answer: 1,
      explain: {
        th: 'ตัวเลือก A ทำได้จริงในทางเทคนิคและเป็นตัวลวงที่ดี แต่ทิ้งตู้ที่มีคอมมอนสองแบบไว้ให้คนรุ่นถัดไป ซึ่งเป็นต้นเหตุของการเดินสายผิดในภายหลัง ส่วนข้อ C แก้ไม่ตรงปัญหา เพราะความเข้ากันไม่ได้อยู่ที่ระดับวงจร ไม่ใช่ระดับลอจิก',
        en: 'Option A is technically workable and a fair distractor, but it leaves a cabinet with two different commons for whoever comes next — a standing invitation to miswire. Option C misses the point: the incompatibility is at circuit level, not logic level.'
      }
    },
    {
      q: {
        th: 'ระบบให้น้ำสั่งเปิดวาล์วเมื่อความชื้นต่ำกว่า 55 %VWC และปิดที่ 65 %VWC แต่เซนเซอร์ถูกถอดออกโดยไม่ตั้งใจ ทำให้ค่าที่อ่านได้ค้างที่ 0 ผลที่เกิดขึ้นคือข้อใด',
        en: 'Irrigation opens below 55 %VWC and closes at 65 %VWC, but the probe is accidentally pulled out so the reading sticks at 0. What happens?'
      },
      options: [
        { th: 'วาล์วจะปิดเองเพราะ PLC ตรวจพบว่าค่าที่อ่านได้อยู่นอกพิสัยที่สมเหตุสมผลของเซนเซอร์', en: 'The valve closes, the PLC detecting that the reading lies outside the sensor&rsquo;s plausible range' },
        { th: 'วาล์วสลับเปิดปิดถี่ ๆ เพราะค่าที่ค้างอยู่ทำให้เงื่อนไขทั้งสองเป็นจริงสลับกันทุกรอบสแกน', en: 'The valve chatters, the stuck value making both conditions true in alternate scans' },
        { th: 'วาล์วไม่เปิดเลย เพราะค่าศูนย์ถูกตีความว่าเป็นสัญญาณผิดพลาดและถูกข้ามโดยอัตโนมัติ', en: 'The valve never opens, a zero being read as a fault and skipped automatically' },
        { th: 'วาล์วเปิดค้างไว้ไม่มีกำหนด เพราะเงื่อนไขปิดไม่มีทางเป็นจริงได้เลยเมื่อค่าค้างที่ศูนย์', en: 'The valve stays open indefinitely, the closing condition never able to become true' }
      ],
      answer: 3,
      explain: {
        th: 'PLC ไม่ตรวจความสมเหตุสมผลของค่าที่อ่านได้ให้เอง ข้อที่ว่าระบบจะรู้เองว่าค่าอยู่นอกพิสัย และข้อที่ว่าค่าศูนย์จะถูกข้ามโดยอัตโนมัติ จึงเป็นความเข้าใจผิดทั้งคู่ นี่คือเหตุผลที่แบบฝึกที่ 4 กำหนดให้จำกัดเวลาเปิดต่อเนื่องไว้ไม่เกิน 20 นาที ซึ่งทำหน้าที่เป็นไทเมอร์เฝ้าระวังจับกรณีเซนเซอร์เสีย',
        en: 'A PLC performs no plausibility checking of its own, so the option where it notices the reading is out of range, and the one where a zero is skipped automatically, both rest on that misconception. This is exactly why Exercise 4 caps any single run at 20 minutes: that timer is the watchdog that catches a failed sensor.'
      }
    },
    {
      q: {
        th: 'ข้อใดอธิบายได้ถูกต้องว่าเหตุใดวงจรหยุดฉุกเฉินจึงต้องใช้รีเลย์นิรภัยภายนอก แทนที่จะเขียนเป็นตรรกะใน PLC',
        en: 'Why must an emergency-stop circuit use an external safety relay rather than logic inside the PLC?'
      },
      options: [
        { th: 'เพราะการหยุดต้องทำงานได้แม้ซอฟต์แวร์ค้างหรือ CPU เสีย ซึ่งตรรกะใน PLC รับประกันไม่ได้', en: 'Because stopping must work even if the software hangs or the CPU fails, which PLC logic cannot guarantee' },
        { th: 'เพราะกระแสของวงจรหยุดฉุกเฉินสูงเกินกว่าที่อินพุตของ PLC จะรับได้อย่างปลอดภัย', en: 'Because the E-stop circuit carries more current than a PLC input can safely accept' },
        { th: 'เพราะมาตรฐานกำหนดให้วงจรนิรภัยต้องแยกออกจากวงจรควบคุมทางกายภาพเสมอโดยไม่มีข้อยกเว้น', en: 'Because the standards require safety circuits to be physically separate from control, without exception' },
        { th: 'เพราะ PLC มีเวลาตอบสนองช้ากว่ารีเลย์นิรภัยมาก จึงหยุดเครื่องได้ไม่ทันในกรณีฉุกเฉิน', en: 'Because a PLC responds far more slowly than a safety relay and cannot stop in time' }
      ],
      answer: 0,
      explain: {
        th: 'หัวใจคือความเป็นอิสระจากความล้มเหลวร่วม ถ้า CPU ค้าง ตรรกะที่เขียนไว้จะไม่ถูกประมวลผลเลย ตัวเลือก D ไม่ใช่เหตุผลหลักเพราะรอบสแกนไม่กี่มิลลิวินาทีเร็วพอ ส่วนข้อ C ใกล้เคียงแต่กล่าวเป็นกฎเกินจริง เพราะมาตรฐานยอมรับ PLC นิรภัยที่ผ่านการรับรองได้',
        en: 'The heart of it is independence from a common failure: if the CPU hangs, logic written there is never executed at all. Option D is not the main reason, since a few milliseconds of scan is quick enough, and D overstates the rule — certified safety PLCs are accepted by the standards.'
      }
    },
    {
      q: {
        th: 'ทีมหนึ่งเขียนโปรแกรมสเกลสัญญาณสามเส้นโดยคัดลอกชุดคำสั่งไปวางสามชุดแล้วแก้ตัวเลขในแต่ละชุด ข้อใดเป็นความเสี่ยงที่สำคัญที่สุด',
        en: 'A team scales three signals by copying one instruction set three times and editing the numbers in each. What is the main risk?'
      },
      options: [
        { th: 'รีจิสเตอร์ที่ใช้เก็บผลลัพธ์กลางจะชนกันเอง ทำให้ค่าของสัญญาณทั้งสามปนกันทุกรอบสแกน', en: 'The intermediate registers collide, mixing all three signals together on every scan' },
        { th: 'หน่วยความจำโปรแกรมจะไม่พอ เพราะคำสั่งคณิตศาสตร์กินพื้นที่มากกว่าคำสั่งลอจิกหลายเท่า', en: 'Program memory runs out, arithmetic instructions using many times the space of logic ones' },
        { th: 'เวลาต่อรอบสแกนจะยาวขึ้นสามเท่า ซึ่งอาจทำให้ระบบตอบสนองต่อเหตุการณ์เร่งด่วนไม่ทัน', en: 'Scan time triples, which may leave the system unable to answer an urgent event in time' },
        { th: 'เมื่อต้องแก้ค่าปลายพิสัยภายหลัง จะมีชุดใดชุดหนึ่งถูกลืมแก้ และความผิดพลาดนั้นหายาก', en: 'When an endpoint changes later, one copy gets forgotten, and that error is hard to find' }
      ],
      answer: 3,
      explain: {
        th: 'ตัวเลือก A เป็นไปได้จริงแต่จะถูกจับได้ทันทีตอนทดสอบ ส่วนความเสี่ยงที่แท้จริงคือความผิดพลาดที่เกิดขึ้น <em>ในอนาคต</em> ตอนบำรุงรักษา ซึ่งไม่มีใครทดสอบซ้ำอีกแล้ว ทางแก้คือเขียนบล็อกฟังก์ชันเดียวแล้วเรียกใช้สามครั้ง',
        en: 'Option A is possible but would be caught the moment it is tested. The real risk is an error introduced <em>later</em>, during maintenance, when nobody retests. The remedy is one function block called three times.'
      }
    }
  ]
});
