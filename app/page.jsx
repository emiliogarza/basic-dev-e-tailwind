import Link from 'next/link';
import { Card } from 'components/card';
import { RandomQuote } from 'components/random-quote';
import { Markdown } from 'components/markdown';
import { ContextAlert } from 'components/context-alert';
import { getNetlifyContext } from 'utils';
import {
    AcademicCapIcon,
    BanknotesIcon,
    CheckBadgeIcon,
    ClipboardDocumentListIcon,
    ReceiptRefundIcon,
    UsersIcon,
    DocumentIcon,
    FlagIcon,
    DevicePhoneMobileIcon,
    SparklesIcon,
    GlobeAsiaAustraliaIcon,
    EnvelopeIcon,
    QuestionMarkCircleIcon,
    ComputerDesktopIcon
  } from '@heroicons/react/24/outline'
import { ActionCards } from 'components/action-cards';



export default function Page() {
    return (
        <div>            
            <h1>Click for <Link href="/beyond">BEYOND RESOURCES</Link></h1>
        </div>
      )
}
