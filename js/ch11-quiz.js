/* ==========================================================================
   Chapter 11 — pre-test and post-test items
   Written to the course item-writing rules: options parallel in form and
   length, distractors drawn from real misconceptions, and questions that ask
   the learner to place a function, check a load or judge an investment.
   Copyright (c) 2026 Jedsada Saijai.
   ========================================================================== */

AMRQuiz.mount('ch11-pre', {
  type: 'pre',
  chapter: 'ch11',
  title: { th: 'แบบทดสอบก่อนเรียน — บทที่ 11', en: 'Pre-test — Chapter 11' },
  intro: {
    th: 'สำรวจความรู้เดิมก่อนเริ่มบทเรียน เน้นการวางหน้าที่ให้ถูกชั้นและการตัดสินใจเชิงระบบ ไม่มีผลต่อคะแนนเก็บ',
    en: 'A diagnostic of prior knowledge, built around placing functions correctly and judging a system. Not graded.'
  },
  questions: [
    {
      q: {
        th: 'วงรอบควบคุมอุณหภูมิของโรงเรือนควรทำงานอยู่ที่ใด',
        en: 'Where should a greenhouse temperature control loop actually run?'
      },
      options: [
        { th: 'บนคอมพิวเตอร์เฝ้าระวังในฟาร์ม เพราะอยู่ใกล้และเห็นข้อมูลของทุกโรงเรือนพร้อมกัน', en: 'On the farm&rsquo;s supervisory PC, which is nearby and sees every house at once' },
        { th: 'ในตัวควบคุมที่หน้างาน เพราะต้องทำงานต่อได้แม้เครือข่ายและชั้นบนทั้งหมดหายไป', en: 'In the field controller, so that it carries on when the network and every layer above it vanish' },
        { th: 'กระจายอยู่ทั้งสามแห่ง เพื่อให้แต่ละแห่งสำรองกันเองเมื่อแห่งใดแห่งหนึ่งขัดข้อง', en: 'Spread across all three, so each can back the others up when one fails' },
        { th: 'บนเซิร์ฟเวอร์คลาวด์ เพราะมีกำลังประมวลผลสูงและปรับปรุงอัลกอริทึมได้จากระยะไกล', en: 'On a cloud server, which has the processing power and can be improved remotely' }
      ],
      answer: 1,
      explain: {
        th: 'คำถามที่ใช้ตัดสินคือถ้าชั้นนั้นหายไป พืชยังปลอดภัยหรือไม่ อินเทอร์เน็ตล่มและคอมพิวเตอร์ดับเป็นเรื่องที่เกิดขึ้นจริงทุกเดือนในฟาร์ม ส่วนการกระจายวงรอบไปสามแห่งพร้อมกันไม่ได้เพิ่มความทนทาน แต่สร้างปัญหาว่าใครเป็นผู้สั่งจริงเมื่อทั้งสามเห็นข้อมูลไม่ตรงกัน',
        en: 'The deciding question is whether the crop stays safe if that layer disappears, and both a dropped internet link and a dead PC happen on farms every month. Spreading one loop over three places does not add robustness; it creates the question of which of them is really in command when the three disagree.'
      }
    },
    {
      q: {
        th: 'ข้อเสนอโครงการระบุว่า “ระบบสื่อสารด้วย MQTT” ข้อมูลนี้เพียงพอที่จะประเมินอัตราข้อมูลและพลังงานหรือไม่',
        en: 'A proposal states that &ldquo;the system communicates with MQTT&rdquo;. Is that enough to judge its data rate and power?'
      },
      options: [
        { th: 'เพียงพอ เพราะ MQTT ออกแบบมาสำหรับอุปกรณ์พลังงานต่ำ จึงประหยัดพลังงานเสมอ', en: 'Yes: MQTT was designed for low-power devices, so it is always economical' },
        { th: 'ไม่เพียงพอ เพราะยังต้องรู้จำนวนอุปกรณ์ด้วย แต่ชนิดของเครือข่ายไม่สำคัญนัก', en: 'No: the number of devices is also needed, though the kind of network matters little' },
        { th: 'เพียงพอ เพราะ MQTT กำหนดอัตราข้อมูลและการใช้พลังงานไว้ในมาตรฐานของตัวเองแล้ว', en: 'Yes: MQTT fixes the data rate and the power draw in its own specification' },
        { th: 'ไม่เพียงพอ เพราะ MQTT เป็นโพรโทคอลที่วิ่งบนเครือข่ายอื่น ซึ่งเป็นตัวกำหนดข้อจำกัดจริง', en: 'No: MQTT is a protocol riding on some other network, and that network sets the real limits' }
      ],
      answer: 3,
      explain: {
        th: 'MQTT วิ่งบน Wi-Fi ก็ได้ บน NB-IoT ก็ได้ ซึ่งต่างกันหลายสิบเท่าทั้งในแง่อัตราข้อมูลและพลังงาน ข้อจำกัดทุกข้อมาจากชั้นล่างนั้น ไม่ได้มาจากโพรโทคอล ส่วนจำนวนอุปกรณ์ก็จำเป็นจริง แต่จะคำนวณอะไรไม่ได้เลยถ้ายังไม่รู้ว่าข้อมูลเดินทางด้วยสื่ออะไร',
        en: 'MQTT runs equally over Wi-Fi or NB-IoT, which differ by tens of times in both rate and power. Every limit comes from that lower layer rather than from the protocol. The device count is indeed needed too, but nothing can be computed at all until the medium is known.'
      }
    },
    {
      q: {
        th: 'เซนเซอร์ความชื้นดินอยู่ห่างจากอาคาร 3 กม. ใช้แบตเตอรี่ และรายงานค่าทุกชั่วโมงก็พอ ควรเลือกเครือข่ายใด',
        en: 'A soil moisture node sits 3 km from any building, runs on a battery and need report only hourly. Which network?'
      },
      options: [
        { th: 'LoRaWAN เพราะส่งได้ไกลและกินพลังงานน้อยมาก ซึ่งตรงกับความถี่ที่ต้องการพอดี', en: 'LoRaWAN, whose range and very low power match the rate required' },
        { th: 'Wi-Fi เพราะติดตั้งง่ายที่สุดและมีอุปกรณ์ราคาถูกให้เลือกมากที่สุดในท้องตลาด', en: 'Wi-Fi, the easiest to install with the widest choice of cheap hardware' },
        { th: 'Modbus RTU เพราะทนทานที่สุดและอุปกรณ์เกษตรแทบทุกยี่ห้อรองรับอยู่แล้ว', en: 'Modbus RTU, the most rugged and supported by nearly every agricultural brand' },
        { th: 'Ethernet เพราะให้อัตราข้อมูลสูงที่สุดและจังหวะเวลาแน่นอนที่สุดในบรรดาทั้งหมด', en: 'Ethernet, with the highest data rate and the most predictable timing of any of them' }
      ],
      answer: 0,
      explain: {
        th: 'ระยะ 3 กม. ตัด Wi-Fi, Modbus RTU และ Ethernet ออกทันที เพราะทั้งสามมีระยะไม่เกินหนึ่งกิโลเมตรและสองในสามต้องลากสาย ส่วนการใช้แบตเตอรี่ตัดทุกตัวที่ต้องมีไฟเลี้ยงออกอีกชั้น ที่สำคัญคือการรายงานทุกชั่วโมงอยู่ในวิสัยของรอบหน้าที่ 1% อย่างสบาย ถ้าโจทย์ต้องการทุกสิบวินาที คำตอบจะเปลี่ยนไปทันที',
        en: 'Three kilometres rules out Wi-Fi, Modbus RTU and Ethernet at once: all three reach under a kilometre and two of them need cable. Battery operation then rules out anything needing mains. Crucially, an hourly report sits comfortably inside a 1% duty cycle — had the brief asked for every ten seconds, the answer would change.'
      }
    },
    {
      q: {
        th: 'ระบบประกอบด้วยชิ้นส่วนห้าชิ้นต่อเรียงกัน แต่ละชิ้นมีความพร้อมใช้งาน 0.98 ความพร้อมใช้งานของทั้งระบบเป็นอย่างไร',
        en: 'A system has five parts in series, each with an availability of 0.98. What is the availability of the whole?'
      },
      options: [
        { th: 'เท่ากับ 0.98 เพราะทุกชิ้นมีค่าเท่ากัน ค่าของระบบจึงเท่ากับค่าของชิ้นส่วนด้วย', en: 'It is 0.98: every part is the same, so the system matches the part' },
        { th: 'สูงกว่า 0.98 เพราะเมื่อชิ้นหนึ่งเสีย ชิ้นที่เหลือยังช่วยพยุงระบบไว้ได้บางส่วน', en: 'Above 0.98, since when one part fails the others still hold the system up in part' },
        { th: 'ต่ำกว่า 0.98 เพราะเป็นผลคูณของทุกชิ้น ระบบจึงแย่กว่าชิ้นที่แย่ที่สุดเสมอ', en: 'Below 0.98, being the product of all of them, so worse than the worst part' },
        { th: 'เท่ากับ 0.98 หารด้วยห้า เพราะความเสี่ยงถูกเฉลี่ยกันไปในบรรดาชิ้นส่วนทั้งห้า', en: 'It is 0.98 divided by five, the risk being shared between the five parts' }
      ],
      answer: 2,
      explain: {
        th: 'การต่อเรียงกันหมายความว่าชิ้นใดเสียระบบก็หยุด ค่าจึงเป็นผลคูณ \\( 0.98^5 = 0.904 \\) ไม่ใช่ 0.98 การที่ชิ้นอื่นจะช่วยพยุงได้ต้องต่อแบบสำรองคู่ขนาน ซึ่งเป็นคนละเรื่องและมีราคา ส่วนการหารด้วยจำนวนชิ้นไม่มีที่มาทางคณิตศาสตร์ใด ๆ',
        en: 'In series, any one failure stops the system, so the figure is the product \\( 0.98^5 = 0.904 \\) rather than 0.98. For other parts to hold it up they would have to be redundant in parallel, which is a different arrangement and costs money. Dividing by the count has no mathematical basis at all.'
      }
    },
    {
      q: {
        th: 'ข้อเสนอหนึ่งรายงานเฉพาะระยะเวลาคืนทุนแบบง่ายว่า 3 ปี และสรุปว่าคุ้มค่า ข้อใดเป็นการประเมินที่ถูกต้อง',
        en: 'A proposal reports only a simple payback of three years and concludes the project pays. Which assessment is right?'
      },
      options: [
        { th: 'ยังไม่พอ เพราะระยะคืนทุนใช้ได้เฉพาะกับโครงการที่มีรายได้คงที่ทุกปีเท่านั้น', en: 'Not enough: payback applies only to projects with an identical income every year' },
        { th: 'ไม่ถูกต้อง เพราะระยะคืนทุนแบบง่ายให้ค่าที่ยาวกว่าความจริงเสมอ จึงมองโลกในแง่ร้ายไป', en: 'It is wrong: a simple payback always reads longer than reality, so it is pessimistic' },
        { th: 'ถูกต้องแล้ว เพราะระยะคืนทุนที่ต่ำกว่าอายุใช้งานของอุปกรณ์ย่อมหมายความว่าคุ้มค่าเสมอ', en: 'It is right: a payback shorter than the equipment&rsquo;s life always means it pays' },
        { th: 'ยังไม่พอ เพราะไม่ได้คิดลดค่าเงิน จึงต้องรายงานมูลค่าปัจจุบันสุทธิควบคู่กันเสมอ', en: 'Not enough: it ignores the cost of money, so a net present value must go with it' }
      ],
      answer: 3,
      explain: {
        th: 'ระยะคืนทุนแบบง่ายมองโลกในแง่ <em>ดี</em> เกินไปเสมอ ไม่ใช่แง่ร้าย เพราะมันนับเงินที่จะได้ในปีที่ห้าเท่ากับเงินวันนี้ เมื่อคิดลดแล้วจุดคืนทุนจะเลื่อนออกไป และที่อัตราคิดลดสูงพอ NPV อาจติดลบทั้งที่ระยะคืนทุนยังดูสั้น ส่วนข้อจำกัดเรื่องรายได้คงที่เป็นเรื่องจริงแต่ไม่ใช่ข้อบกพร่องหลักของข้อเสนอนี้',
        en: 'A simple payback is always <em>optimistic</em> rather than pessimistic, because it counts money arriving in year five as worth what it is today. Discounted, the break-even moves outwards, and at a high enough rate the NPV can be negative while the payback still looks short. The point about a constant income is real but is not this proposal&rsquo;s main defect.'
      }
    },
    {
      q: {
        th: 'ข้อกำหนดหนึ่งข้อเขียนว่า “ระบบต้องทำงานได้อย่างน่าเชื่อถือ” ควรทำอย่างไรกับข้อกำหนดนี้',
        en: 'A requirement reads &ldquo;the system shall operate reliably&rdquo;. What should be done with it?'
      },
      options: [
        { th: 'รับไว้ได้ เพราะความน่าเชื่อถือเป็นเรื่องที่ทุกฝ่ายเข้าใจตรงกันอยู่แล้วโดยไม่ต้องนิยาม', en: 'Accept it: everyone already understands reliability without defining it' },
        { th: 'เขียนใหม่ให้เป็นตัวเลขที่วัดได้ เพราะข้อกำหนดที่ทดสอบไม่ได้คือข้อกำหนดที่ยังไม่ชัดพอ', en: 'Rewrite it as a number that can be measured: a requirement that cannot be tested is not yet clear' },
        { th: 'ย้ายไปไว้ในส่วนของความต้องการของผู้ใช้ แล้วปล่อยให้ผู้รับเหมาตีความเอาเองตามเหมาะสม', en: 'Move it into the user needs and let the contractor interpret it as seems fit' },
        { th: 'ตัดทิ้ง เพราะความน่าเชื่อถือเป็นผลที่ตามมาจากการออกแบบที่ดี ไม่ใช่สิ่งที่กำหนดได้ล่วงหน้า', en: 'Delete it: reliability follows from good design rather than being specifiable in advance' }
      ],
      answer: 1,
      explain: {
        th: 'กระบวนการรูปตัววีบังคับให้ทุกข้อกำหนดมีการทดสอบคู่กัน ข้อความนี้จึงต้องกลายเป็นตัวเลข เช่น ความพร้อมใช้งานไม่ต่ำกว่า 0.95 ในหนึ่งฤดูกาล และเวลาซ่อมไม่เกินสี่ชั่วโมง การปล่อยให้ตีความเองคือที่มาของข้อพิพาทตอนส่งมอบ ส่วนการตัดทิ้งก็ทำให้ไม่มีใครรับผิดชอบเมื่อระบบหยุดบ่อย',
        en: 'The V-model requires every requirement to have a paired test, so this must become a number — an availability of at least 0.95 across one season, say, with repairs completed within four hours. Leaving it to interpretation is where handover disputes begin, and deleting it leaves nobody answerable when the system keeps stopping.'
      }
    },
    {
      q: {
        th: 'หุ่นยนต์ตัวหนึ่งระบุในแค็ตตาล็อกว่าทำได้ 120 รอบต่อนาที อัตราที่ใช้งานได้จริงในสายการผลิตจะเป็นอย่างไร',
        en: 'A robot&rsquo;s catalogue says 120 cycles a minute. What will the usable rate on a line be?'
      },
      options: [
        { th: 'เท่ากับ 120 เพราะตัวเลขในแค็ตตาล็อกวัดมาจากการทดสอบในสภาพการใช้งานจริงแล้ว', en: 'It will be 120: the catalogue figure was measured under real working conditions' },
        { th: 'สูงกว่า 120 เล็กน้อย เพราะผู้ผลิตมักระบุค่าต่ำกว่าความจริงไว้เพื่อความปลอดภัย', en: 'Slightly above 120: makers usually understate the figure for safety' },
        { th: 'ต่ำกว่า 120 เพราะต้องคูณด้วยความพร้อมใช้งานและสัดส่วนที่หยิบติดจริงอีกสองตัว', en: 'Below 120, having to be multiplied by availability and by the fraction that actually picks' },
        { th: 'เท่ากับ 120 ถ้าบำรุงรักษาดี เพราะความพร้อมใช้งานที่ดีจะทำให้ได้ค่าตามที่ระบุไว้', en: 'It will be 120 if well maintained, good availability delivering the quoted figure' }
      ],
      answer: 2,
      explain: {
        th: 'ตัวเลขในแค็ตตาล็อกคือความสามารถเชิงกลไกล้วน ไม่รวมเวลาที่เครื่องหยุดและไม่รวมครั้งที่หยิบไม่ติด แม้การบำรุงรักษาที่ดีจะยกความพร้อมใช้งานขึ้นได้ แต่ไม่มีทางถึง 1.0 และไม่ช่วยเรื่องสัดส่วนที่หยิบติดเลย ซึ่งขึ้นกับผลผลิตที่เข้ามาแต่ละวัน',
        en: 'A catalogue figure is pure mechanical capability, excluding both stoppages and failed picks. Good maintenance does raise availability but never to 1.0, and it does nothing for the pick rate, which depends on the produce arriving each day.'
      }
    },
    {
      q: {
        th: 'ระบบอัตโนมัติที่ออกแบบมาดีและทำงานได้จริง มักถูกเลิกใช้ภายในหนึ่งฤดูกาลด้วยสาเหตุใดมากที่สุด',
        en: 'A well-designed automation system that genuinely works is most often abandoned within a season for what reason?'
      },
      options: [
        { th: 'ไม่มีใครในฟาร์มซ่อมเองได้ ทุกครั้งที่หยุดจึงต้องรอช่างจากภายนอกหลายวัน', en: 'Nobody on the farm can repair it, so every stoppage waits days for an outside technician' },
        { th: 'ราคาพลังงานที่เพิ่มขึ้นทำให้ค่าใช้จ่ายในการเดินระบบสูงกว่าที่ประมาณการไว้มาก', en: 'Rising energy prices push the running cost well above what was estimated' },
        { th: 'ซอฟต์แวร์ล้าสมัยเร็ว จึงต้องเปลี่ยนทั้งระบบทุกสองถึงสามปีเพื่อให้ยังใช้งานได้', en: 'The software dates quickly, so the whole system must be replaced every two or three years' },
        { th: 'อุปกรณ์เสื่อมสภาพเร็วกว่าที่คาด เพราะสภาพแวดล้อมในฟาร์มมีความชื้นและฝุ่นสูงมาก', en: 'The hardware wears faster than expected, farms being humid and very dusty' }
      ],
      answer: 0,
      explain: {
        th: 'ทั้งสามข้อที่เหลือเกิดขึ้นได้จริง แต่ล้วนใช้เวลาหลายปีกว่าจะส่งผล ส่วนการรอช่างสามวันในช่วงที่พืชต้องการน้ำทุกวันทำให้เกษตรกรกลับไปใช้วิธีเดิมภายในครั้งที่สองหรือสาม ตัวเลข MTTR จึงเป็นเรื่องของการฝึกคนและอะไหล่สำรอง ไม่ใช่เรื่องของคุณภาพอุปกรณ์',
        en: 'The other three all happen, but each takes years to bite. Waiting three days for a technician while the crop needs water daily sends the grower back to the old method by the second or third occurrence. MTTR is therefore a question of training and of a spare on the shelf rather than of equipment quality.'
      }
    }
  ]
});

AMRQuiz.mount('ch11-post', {
  type: 'post',
  chapter: 'ch11',
  title: { th: 'แบบทดสอบหลังเรียน — บทที่ 11', en: 'Post-test — Chapter 11' },
  intro: {
    th: 'สิบข้อ เน้นการวางหน้าที่ให้ถูกชั้น การตรวจภาระเครือข่าย ความพร้อมใช้งาน และการประเมินความคุ้มค่า เกณฑ์ผ่าน 70%',
    en: 'Ten items on placing functions in the right layer, checking a network load, availability and assessing an investment. Pass mark 70%.'
  },
  questions: [
    {
      q: {
        th: 'สาย Modbus RTU มีอุปกรณ์ 20 ตัว แต่ละตัวอ่าน 8 รีจิสเตอร์ ที่ 9 600 บอด ช่วงพัก 8 ms รอบการสำรวจเป็นเท่าใด',
        en: 'A Modbus RTU line has 20 devices reading 8 registers each at 9 600 baud with an 8 ms gap. What is the poll cycle?'
      },
      options: [
        { th: '0.66 s จากการคิดเวลาส่งเฟรมอย่างเดียว โดยลืมบวกช่วงพักระหว่างรายการเข้าไป', en: '0.66 s, counting only the frame time and forgetting to add the gaps' },
        { th: '1.65 s จากการนับอุปกรณ์แต่ละตัวสองครั้ง คือนับทั้งคำถามและคำตอบแยกกันเป็นรายการ', en: '1.65 s, counting each device twice by treating request and reply as separate transactions' },
        { th: '0.82 s จากการแทนค่าในสมการ (11.2) โดยคิดทั้งเวลาส่งเฟรมและช่วงพักครบถ้วน', en: '0.82 s, substituting into equation (11.2) with both the frame time and the gaps' },
        { th: '0.16 s จากการนับเฉพาะช่วงพักระหว่างรายการ โดยไม่คิดเวลาส่งเฟรมเข้าไปด้วยเลย', en: '0.16 s, counting only the gaps between transactions and no frame time at all' }
      ],
      answer: 2,
      explain: {
        th: 'เฟรมหนึ่งรายการมี \\( 13 + 2(8) = 29 \\) ไบต์ ใช้เวลา \\( 11(29)/9600 = 33.2 \\) ms บวกช่วงพัก 8 ms ได้ 41.2 ms ต่ออุปกรณ์ คูณ 20 ตัวได้ 0.82 s การลืมช่วงพักเป็นความผิดพลาดที่พบบ่อยที่สุด และทำให้ประเมินรอบสั้นกว่าความจริง 20%',
        en: 'One transaction is \\( 13 + 2(8) = 29 \\) bytes, taking \\( 11(29)/9600 = 33.2 \\) ms, plus the 8 ms gap gives 41.2 ms per device, and 20 of them give 0.82 s. Forgetting the gap is the commonest slip and understates the cycle by 20%.'
      }
    },
    {
      q: {
        th: 'โหนด LoRaWAN มีเวลาออกอากาศ 0.62 s และรอบหน้าที่ที่อนุญาต 1% ส่งข้อมูลได้ถี่ที่สุดเท่าใด',
        en: 'A LoRaWAN node has 0.62 s of airtime at a permitted duty cycle of 1%. How often may it transmit?'
      },
      options: [
        { th: 'ทุก 62 วินาที จากการหารเวลาออกอากาศด้วยรอบหน้าที่ตามสมการ (11.5)', en: 'Every 62 seconds, dividing the airtime by the duty cycle, by equation (11.5)' },
        { th: 'ทุก 0.62 วินาที เพราะเวลาออกอากาศคือช่วงเวลาที่สั้นที่สุดระหว่างการส่งสองครั้ง', en: 'Every 0.62 seconds, the airtime being the shortest interval between transmissions' },
        { th: 'ทุก 6.2 วินาที จากการใช้รอบหน้าที่ 10% แทนที่จะเป็น 1% ตามที่โจทย์กำหนดไว้', en: 'Every 6.2 seconds, using a 10% duty cycle instead of the 1% the brief gives' },
        { th: 'ทุก 620 วินาที จากการใช้รอบหน้าที่ 0.1% ซึ่งเป็นค่าที่ใช้กับช่องสัญญาณบางช่อง', en: 'Every 620 seconds, using the 0.1% that applies on certain channels' }
      ],
      answer: 0,
      explain: {
        th: 'สมการ (11.5) ให้ \\( 0.62/0.01 = 62 \\) s คือราว 58 ครั้งต่อชั่วโมง การเข้าใจว่าเวลาออกอากาศคือช่วงที่สั้นที่สุดเป็นความเข้าใจผิดที่ทำให้ประเมินความสามารถของเครือข่ายสูงเกินความจริงถึงร้อยเท่า',
        en: 'Equation (11.5) gives \\( 0.62/0.01 = 62 \\) s, about 58 messages an hour. Taking the airtime itself as the shortest interval is the misconception that overstates what the network can do by a factor of a hundred.'
      }
    },
    {
      q: {
        th: 'ระบบประกอบด้วยชิ้นส่วนที่มีความพร้อมใช้งาน 0.99, 0.98, 0.96, 0.995 และ 0.99 ต่อเรียงกัน ความพร้อมใช้งานของระบบเป็นเท่าใด',
        en: 'Parts with availabilities 0.99, 0.98, 0.96, 0.995 and 0.99 are in series. What is the system availability?'
      },
      options: [
        { th: '0.995 ซึ่งเท่ากับค่าของชิ้นส่วนที่ดีที่สุด เพราะชิ้นอื่นช่วยพยุงกันไว้ได้ในระบบ', en: '0.995, equal to the best part, the others holding the system up between them' },
        { th: '0.983 ซึ่งเป็นค่าเฉลี่ยเลขคณิตของความพร้อมใช้งานของชิ้นส่วนทั้งห้าชิ้นรวมกัน', en: '0.983, the arithmetic mean of the five component availabilities' },
        { th: '0.960 ซึ่งเท่ากับค่าของชิ้นส่วนที่แย่ที่สุด เพราะมันเป็นตัวจำกัดของทั้งระบบ', en: '0.960, equal to the worst part, which is what limits the whole' },
        { th: '0.917 จากการคูณความพร้อมใช้งานของทุกชิ้นเข้าด้วยกันตามสมการ (11.9)', en: '0.917, multiplying every component availability together, by equation (11.9)' }
      ],
      answer: 3,
      explain: {
        th: 'ผลคูณคือ 0.917 ซึ่งแย่กว่าชิ้นที่แย่ที่สุดเสียอีก นี่คือสมบัติสำคัญของการต่อเรียงกัน ค่าเฉลี่ยใช้ไม่ได้เพราะความล้มเหลวไม่ได้เฉลี่ยกัน แต่สะสมกัน และ 0.917 หมายถึงเวลาสูญไป 45 นาทีในกะแปดชั่วโมง ซึ่งเป็นตัวเลขที่ต้องแจ้งเจ้าของฟาร์มตั้งแต่ตอนเสนอ',
        en: 'The product is 0.917, worse even than the worst part — the defining property of a series arrangement. An average will not do, because failures do not average but accumulate, and 0.917 means 45 minutes lost in an eight-hour shift, a figure the farm owner must be told at the proposal stage.'
      }
    },
    {
      q: {
        th: 'ชิ้นส่วนที่เป็นจุดอ่อนที่สุดมี \\( \\text{MTBF} = 190 \\) ชม. และ \\( \\text{MTTR} = 10 \\) ชม. ต้องการยกความพร้อมใช้งานเป็น 0.98 ทางใดเหมาะสมที่สุด',
        en: 'The weakest part has \\( \\text{MTBF} = 190 \\) h and \\( \\text{MTTR} = 10 \\) h. To reach an availability of 0.98, which route is soundest?'
      },
      options: [
        { th: 'ยอมรับค่า 0.95 ที่เป็นอยู่ แล้วไปยกความพร้อมใช้งานของชิ้นส่วนอื่นขึ้นทดแทนแทน', en: 'Accept the 0.95 as it is and raise the availability of the other parts instead' },
        { th: 'ลดเวลาซ่อมเหลือราว 4 ชม. ด้วยอะไหล่สำรองและการฝึกคนในฟาร์ม โดยไม่เปลี่ยนอุปกรณ์เลย', en: 'Cut the repair to about 4 h with a spare and trained farm staff, changing no equipment' },
        { th: 'เพิ่มอายุก่อนเสียเป็นราว 490 ชม. ด้วยการเปลี่ยนไปใช้อุปกรณ์เกรดอุตสาหกรรมที่ทนกว่า', en: 'Raise the time between failures to about 490 h with tougher industrial-grade hardware' },
        { th: 'ติดตั้งชิ้นส่วนสำรองคู่ขนานอีกชุดหนึ่ง เพื่อให้สลับไปใช้ได้ทันทีเมื่อชุดแรกเสียหาย', en: 'Fit a second unit in parallel so the system can switch to it the moment the first fails' }
      ],
      answer: 1,
      explain: {
        th: 'ทั้งการเพิ่มอายุก่อนเสียและการติดตั้งชุดสำรองให้ผลได้จริง แต่ทั้งคู่ต้องซื้อของเพิ่มและอาจไม่มีขายในระดับที่ต้องการ ส่วนการยกชิ้นอื่นแทนให้ผลน้อยมากเพราะชิ้นเหล่านั้นดีอยู่แล้ว การลด MTTR ทำได้ทันทีด้วยอะไหล่ที่วางอยู่ในตู้และคนที่เปลี่ยนเองได้ ซึ่งถูกกว่าหลายเท่า',
        en: 'Raising the time between failures and fitting a standby both work, but each means buying more and may not be available at the level needed, while improving the other parts gains almost nothing because they are already good. Cutting MTTR can be done at once with a spare in the cabinet and someone able to swap it, at a fraction of the cost.'
      }
    },
    {
      q: {
        th: 'ลงทุน 600 000 บาท ได้ประโยชน์สุทธิ 150 000 บาท/ปี ที่อัตราคิดลด 10% อายุ 8 ปี NPV เป็นเท่าใด',
        en: 'An investment of 600 000 baht returns 150 000 baht a year. At a 10% discount rate over eight years, what is the NPV?'
      },
      options: [
        { th: 'ประมาณ +200 000 บาท จากการรวมประโยชน์ที่คิดลดแล้วหักเงินลงทุนตามสมการ (11.14)', en: 'About +200 000 baht, summing the discounted benefits and deducting the investment, by equation (11.14)' },
        { th: 'ประมาณ +600 000 บาท จากการรวมประโยชน์แปดปีโดยไม่คิดลดค่าเงินเลยแล้วหักเงินลงทุน', en: 'About +600 000 baht, summing eight undiscounted years and deducting the investment' },
        { th: 'ประมาณ −100 000 บาท จากการคิดลดเงินลงทุนด้วยอีกชั้นหนึ่งทั้งที่จ่ายไปแล้วในปีที่ศูนย์', en: 'About −100 000 baht, discounting the investment as well although it was paid in year zero' },
        { th: 'ประมาณ +800 000 บาท จากการรวมประโยชน์ที่คิดลดแล้วโดยลืมหักเงินลงทุนออก', en: 'About +800 000 baht, summing the discounted benefits but forgetting to deduct the investment' }
      ],
      answer: 0,
      explain: {
        th: 'ตัวประกอบเงินรายปีที่ 10% แปดปีคือ 5.335 จึงได้ \\( 150\\,000(5.335) - 600\\,000 = +200\\,000 \\) บาท ข้อที่ตอบ 600 000 คือการไม่คิดลดเลย ซึ่งให้ค่าสูงเกินไปสามเท่า และเป็นความผิดพลาดที่ทำให้โครงการที่ไม่คุ้มผ่านการอนุมัติมาแล้วจำนวนมาก',
        en: 'The annuity factor at 10% over eight years is 5.335, so \\( 150\\,000(5.335) - 600\\,000 = +200\\,000 \\) baht. The 600 000 answer discounts nothing, overstating the result threefold, and it is the error that has carried many unprofitable projects through approval.'
      }
    },
    {
      q: {
        th: 'ทีมหนึ่งเสนอให้ส่งสัญญาณหยุดฉุกเฉินผ่าน Wi-Fi ไปยัง PLC เพื่อลดการเดินสาย ข้อใดเป็นการตอบที่ถูกต้อง',
        en: 'A team proposes sending the emergency stop over Wi-Fi to the PLC, to save cabling. Which reply is correct?'
      },
      options: [
        { th: 'รับได้ถ้าใช้เครือข่ายแยกเฉพาะและตั้งค่าให้ส่งซ้ำหลายครั้ง เพื่อชดเชยการสูญหายของแพ็กเกต', en: 'Acceptable on a dedicated network with repeated sending, to make up for lost packets' },
        { th: 'รับได้ถ้าเพิ่มสัญญาณเฝ้าตรวจที่ตัดวงจรเมื่อขาดการติดต่อ ซึ่งทำให้ปลอดภัยเทียบเท่าการเดินสาย', en: 'Acceptable with a watchdog that trips on lost contact, making it as safe as a wire' },
        { th: 'รับไม่ได้ เพราะ Wi-Fi มีจังหวะเวลาที่ไม่แน่นอน และหน้าที่นี้ต้องเดินสายตรงไม่ผ่านชั้นใด', en: 'Not acceptable: Wi-Fi has unpredictable timing, and this duty must be hardwired past every layer' },
        { th: 'รับไม่ได้ เพราะ Wi-Fi มีอัตราข้อมูลไม่พอ ควรเปลี่ยนไปใช้ Ethernet ที่เร็วกว่ามากแทน', en: 'Not acceptable: Wi-Fi lacks the data rate, so faster Ethernet should be used instead' }
      ],
      answer: 2,
      explain: {
        th: 'อัตราข้อมูลไม่ใช่ปัญหาเลย เพราะสัญญาณหยุดฉุกเฉินมีขนาดหนึ่งบิต ปัญหาคือเวลาที่ไม่รับประกันและความเป็นไปได้ที่การติดต่อจะขาด ซึ่งการเปลี่ยนไปใช้ Ethernet ก็ไม่ได้แก้ สัญญาณเฝ้าตรวจช่วยได้บ้างและมีใช้จริงในระบบความปลอดภัยที่ได้รับการรับรอง แต่ต้องผ่านการประเมินและรับรองเฉพาะ ไม่ใช่สิ่งที่เพิ่มเข้าไปเองเพื่อประหยัดสายไฟ',
        en: 'Data rate is not the issue at all, an emergency stop being one bit. The issue is unguaranteed timing and the possibility of losing contact, which moving to Ethernet does not fix either. A watchdog does help and is used in certified safety systems, but only after specific assessment and certification — not as something added to save cable.'
      }
    },
    {
      q: {
        th: 'หุ่นยนต์มีรอบการทำงาน 0.60 s ความพร้อมใช้งาน 0.90 และหยิบติด 0.85 สายต้องการ 85 ชิ้นต่อนาที ผลเป็นอย่างไร',
        en: 'A robot has a 0.60 s cycle, availability 0.90 and a pick rate of 0.85. The line needs 85 a minute. What follows?'
      },
      options: [
        { th: 'ได้ 85 ชิ้นต่อนาที จึงพอดี เพราะต้องคูณด้วยสัดส่วนที่หยิบติดเพียงค่าเดียวเท่านั้น', en: '85 a minute, exactly enough: only the pick rate needs to be applied' },
        { th: 'ได้ 76 ชิ้นต่อนาที จึงไม่พอ ต้องเพิ่มหุ่นยนต์อีกตัวหรือยกค่าใดค่าหนึ่งในสามค่าให้สูงขึ้น', en: '76 a minute, so it falls short: add a second robot or raise one of the three figures' },
        { th: 'ได้ 100 ชิ้นต่อนาที จึงเพียงพอ เพราะรอบ 0.60 s ให้ผลตามนั้นเมื่อเดินเต็มกำลังต่อเนื่อง', en: '100 a minute, so it suffices: a 0.60 s cycle gives that when running flat out' },
        { th: 'ได้ 90 ชิ้นต่อนาที จึงเพียงพอ เพราะต้องคูณด้วยความพร้อมใช้งานเพียงค่าเดียวเท่านั้น', en: '90 a minute, so it suffices: only the availability needs to be applied' }
      ],
      answer: 1,
      explain: {
        th: 'สมการ (11.7) ให้ \\( (60/0.60)(0.90)(0.85) = 76.5 \\) ชิ้นต่อนาที ซึ่งขาดไป 10% การคูณเพียงค่าเดียวทำให้ได้ 90 หรือ 85 ซึ่งทั้งคู่ดูเหมือนผ่าน และเป็นสาเหตุที่สายการผลิตจำนวนมากถูกออกแบบมาต่ำกว่าที่ต้องการแล้วพบปัญหาตอนเดินจริง',
        en: 'Equation (11.7) gives \\( (60/0.60)(0.90)(0.85) = 76.5 \\) a minute, ten per cent short. Applying only one factor yields 90 or 85, both of which appear to pass, and that is how many lines come to be specified below what they need and discover it only in production.'
      }
    },
    {
      q: {
        th: 'ในแอนิเมชัน 11.1 เมื่อทำให้คอมพิวเตอร์เฝ้าระวังดับโดยไม่แตะอย่างอื่น สิ่งที่เกิดขึ้นคือข้อใด',
        en: 'In Animation 11.1, failing the supervisory PC alone does what?'
      },
      options: [
        { th: 'เสียเฉพาะการเข้าถึงจากระยะไกล ส่วนหน้าจอในฟาร์มและการบันทึกข้อมูลยังทำงานได้ตามปกติ', en: 'Only remote access is lost, the on-farm dashboard and the logging continuing as normal' },
        { th: 'ทุกหน้าที่หยุดหมด เพราะคอมพิวเตอร์เป็นตัวประสานงานระหว่างชั้นทั้งหมดของระบบ', en: 'Everything stops, the PC coordinating every layer of the system' },
        { th: 'การควบคุมอุณหภูมิทำงานแบบจำกัด เพราะต้องถอยไปใช้ค่าสำรองที่ตั้งไว้ล่วงหน้า', en: 'Temperature control degrades, falling back to a preset default' },
        { th: 'เสียหน้าจอและการบันทึกข้อมูล แต่วงรอบควบคุมใน PLC และการหยุดฉุกเฉินยังทำงานปกติ', en: 'The dashboard and the logging are lost while the PLC loop and the e-stop carry on' }
      ],
      answer: 3,
      explain: {
        th: 'หน้าจอและการบันทึกเป็นหน้าที่ของชั้น 4 ซึ่งอยู่บนคอมพิวเตอร์เครื่องนั้นเอง จึงหายไปพร้อมกัน ส่วนการเสียเฉพาะการเข้าถึงจากระยะไกลคือสิ่งที่เกิดขึ้นเมื่ออินเทอร์เน็ตล่ม ไม่ใช่เมื่อคอมพิวเตอร์ดับ และการถอยไปใช้ค่าสำรองเกิดขึ้นเมื่อเซนเซอร์เสีย นี่คือเหตุผลที่วงรอบต้องอยู่ชั้น 3 ตามหัวข้อ 11.1',
        en: 'The dashboard and the historian are layer 4 functions living on that very computer, so both go with it. Losing only remote access is what happens when the internet drops rather than the PC, and falling back to a default is what a failed sensor causes. This is exactly why the loop belongs in layer 3, as §11.1 argued.'
      }
    },
    {
      q: {
        th: 'ในแอนิเมชัน 11.3 เมื่อเพิ่มอัตราคิดลดจาก 0% ขึ้นไปเรื่อย ๆ โดยคงเงินลงทุนและประโยชน์ต่อปีไว้ สิ่งที่สังเกตได้คือข้อใด',
        en: 'In Animation 11.3, raising the discount rate from zero at a fixed investment and benefit shows what?'
      },
      options: [
        { th: 'คืนทุนแบบง่ายไม่เปลี่ยน แต่คืนทุนที่คิดลดแล้วยาวขึ้น และ NPV ลดลงจนอาจติดลบ', en: 'The simple payback holds while the discounted one lengthens and the NPV falls, possibly below zero' },
        { th: 'คืนทุนทั้งสองแบบไม่เปลี่ยน แต่ NPV ลดลง เพราะอัตราคิดลดกระทบเฉพาะค่าสุดท้ายเท่านั้น', en: 'Neither payback changes while the NPV falls, the rate affecting only the final figure' },
        { th: 'คืนทุนที่คิดลดแล้วสั้นลง เพราะการคิดลดทำให้เงินในปีแรก ๆ มีน้ำหนักมากกว่าปีหลัง ๆ', en: 'The discounted payback shortens, discounting weighting the early years more than the late ones' },
        { th: 'คืนทุนแบบง่ายยาวขึ้นตามไปด้วย เพราะทั้งสองวิธีใช้ตัวเลขชุดเดียวกันในการคำนวณ', en: 'The simple payback lengthens too, both methods using the same figures' }
      ],
      answer: 0,
      explain: {
        th: 'คืนทุนแบบง่ายคือ \\( I/B \\) ซึ่งไม่มีอัตราคิดลดอยู่ในสูตรเลย จึงคงที่ ส่วนเงินที่จะได้ในปีหลัง ๆ มีค่าน้อยลงเมื่อคิดลด กระแสเงินสะสมจึงไต่ขึ้นช้ากว่าและข้ามศูนย์ช้ากว่า ที่อัตราสูงพอ NPV ติดลบทั้งที่คืนทุนแบบง่ายยังดูสั้น ซึ่งเป็นจุดที่กับดักนี้อันตรายที่สุด',
        en: 'The simple payback is \\( I/B \\), with no discount rate in it at all, so it does not move. Money arriving in later years is worth less once discounted, so the cumulative cash flow climbs more slowly and crosses zero later. At a high enough rate the NPV goes negative while the simple payback still looks short, and that is where this trap does its damage.'
      }
    },
    {
      q: {
        th: 'ในข้อเสนอของกิจกรรมที่ 11.1 ข้อบกพร่องใดอันตรายที่สุด และเพราะเหตุใด',
        en: 'Among the faults in the proposal of Activity 11.1, which is the most dangerous, and why?'
      },
      options: [
        { th: 'การอ้างว่าความพร้อมใช้งานเกิน 98% เพราะทำให้ประเมินเวลาที่ระบบหยุดต่ำกว่าความจริงมาก', en: 'Claiming above 98% availability, which badly understates how long the system will be stopped' },
        { th: 'การส่งค่าทุก 10 วินาทีบน LoRaWAN เพราะเกินรอบหน้าที่ที่กฎหมายอนุญาตถึงเกือบสี่เท่า', en: 'Reporting every 10 s on LoRaWAN, nearly four times over the legal duty cycle' },
        { th: 'การคำนวณระยะคืนทุนโดยลืมค่าใช้จ่ายเพิ่ม เพราะทำให้เจ้าของฟาร์มตัดสินใจบนตัวเลขที่ผิด', en: 'A payback computed without the running cost, so the owner decides on a wrong figure' },
        { th: 'การต่อปุ่มหยุดฉุกเฉินผ่าน PLC เพราะถ้าตัวควบคุมค้าง ปุ่มจะไม่ทำงานและคนอาจบาดเจ็บ', en: 'Routing the emergency stop through the PLC: if it hangs, the button does nothing and someone is hurt' }
      ],
      answer: 3,
      explain: {
        th: 'ข้อบกพร่องอีกสามข้อทำให้เสียเงิน เสียเวลา หรือผิดกฎหมาย ซึ่งแก้ไขได้ภายหลังทั้งหมด ส่วนปุ่มหยุดฉุกเฉินที่พึ่งพาตัวควบคุมจะไม่ทำงานในสถานการณ์เดียวกับที่เราต้องการมันมากที่สุด คือตอนที่ตัวควบคุมทำงานผิดปกติ มาตรฐานในบทที่ 8 จึงบังคับให้เดินสายตรง และความเสียหายในกรณีนี้ย้อนกลับไม่ได้',
        en: 'The other three cost money, time or legality, and every one can be put right afterwards. An emergency stop that depends on the controller fails in exactly the situation it is wanted for — when the controller is misbehaving. The standards of Chapter 8 therefore require it to be hardwired, and here the harm cannot be undone.'
      }
    }
  ]
});
