export default function TermsPage() {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
          利用規約
        </h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">第1条（適用）</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              本規約は、Machikon ALICE（以下「当サービス」といいます）が提供するサービスの利用条件を定めるものです。
              登録ユーザーの皆さま（以下「ユーザー」といいます）には、本規約に従って当サービスをご利用いただきます。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">第2条（利用登録）</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              1. 当サービスの利用を希望する方は、本規約に同意の上、当社の定める方法によって利用登録を申請し、
              当社がこれを承認することによって、利用登録が完了するものとします。
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              2. 当社は、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあり、
              その理由については一切の開示義務を負わないものとします。
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>利用登録の申請に際して虚偽の事項を届け出た場合</li>
              <li>本規約に違反したことがある者からの申請である場合</li>
              <li>その他、当社が利用登録を相当でないと判断した場合</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">第3条（ユーザーIDおよびパスワードの管理）</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              1. ユーザーは、自己の責任において、当サービスのユーザーIDおよびパスワードを適切に管理するものとします。
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              2. ユーザーは、いかなる場合にも、ユーザーIDおよびパスワードを第三者に譲渡または貸与し、
              もしくは第三者と共用することはできません。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">第4条（禁止事項）</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              ユーザーは、当サービスの利用にあたり、以下の行為をしてはなりません。
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>当サービスの内容等、当サービスに含まれる著作権、商標権ほか知的財産権を侵害する行為</li>
              <li>当社、ほかのユーザー、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
              <li>当サービスによって得られた情報を商業的に利用する行為</li>
              <li>当サービスの運営を妨害するおそれのある行為</li>
              <li>不正アクセスをし、またはこれを試みる行為</li>
              <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
              <li>不正な目的を持って当サービスを利用する行為</li>
              <li>当サービスの他のユーザーまたはその他の第三者に不利益、損害、不快感を与える行為</li>
              <li>他のユーザーに成りすます行為</li>
              <li>当社が許諾しない当サービス上での宣伝、広告、勧誘、または営業行為</li>
              <li>その他、当社が不適切と判断する行為</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">第5条（本サービスの提供の停止等）</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく
              本サービスの全部または一部の提供を停止または中断することができるものとします。
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
              <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
              <li>コンピュータまたは通信回線等が事故により停止した場合</li>
              <li>その他、当社が本サービスの提供が困難と判断した場合</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">第6条（保証の否認および免責事項）</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              1. 当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、
              特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）が
              ないことを明示的にも黙示的にも保証しておりません。
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              2. 当社は、本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">第7条（サービス内容の変更等）</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              当社は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、
              これによってユーザーに生じた損害について一切の責任を負いません。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">第8条（利用規約の変更）</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。
              なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">第9条（準拠法・裁判管轄）</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              1. 本規約の解釈にあたっては、日本法を準拠法とします。
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              2. 本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
            </p>
          </section>

          <div className="mt-12 text-right text-gray-600">
            <p>2024年4月1日 制定</p>
          </div>
        </div>
      </div>
    </div>
  );
}
