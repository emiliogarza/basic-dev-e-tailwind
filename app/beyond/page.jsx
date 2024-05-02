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
    ComputerDesktopIcon,
    CameraIcon,
    PlayIcon
  } from '@heroicons/react/24/outline'
import { ActionCards } from 'components/action-cards';

const tipsTricks = [
    {
        title: 'Exposure Triangle',
        description: 'Understanding Exposure: The Exposure Triangle with Mark Wallace',
        href: 'https://www.youtube.com/watch?v=3eVjUrY9a9c',
        icon: PlayIcon,
        iconForeground: 'text-purple-700',
        iconBackground: 'bg-rose-50',
    },
    {
        title: '5 Tips for Church Photography',
        description: 'How To Take Photos At Church - 5 Tips for Church Photography Omar Eltakrori',
        href: 'https://www.youtube.com/watch?v=q0h_yjcehhk',
        icon: PlayIcon,
        iconForeground: 'text-sky-700',
        iconBackground: 'bg-sky-50',
    },
    {
        title: 'Best Settings for Church Photography',
        description: ' Best Settings for Church Photography - Behind The Scenes Tutorial - Omar Eltakrori',
        href: 'https://www.youtube.com/watch?v=gTZpv0DBwIE',
        icon: PlayIcon,
        iconForeground: 'text-indigo-700',
        iconBackground: 'bg-indigo-50',
    }
]

const schedulingActions = [
    {
        title: 'Smug Mug',
        description: 'Photo Management',
        href: 'https://www.smugmug.com/',
        icon: DevicePhoneMobileIcon,
        iconForeground: 'text-purple-700',
        iconBackground: 'bg-rose-50',
    },
    {
        title: 'Planning Center',
        description: 'Planning Center is a set of software tools to help you organize information, coordinate events, communicate with your team, and connect with your congregation.',
        href: 'https://www.planningcenter.com/',
        icon: FlagIcon,
        iconForeground: 'text-teal-700',
        iconBackground: 'bg-teal-50',
    },
    {
        title: 'Breeze ChMS',
        description: 'Church management software, handles featuring groups, service planning and giving tools. Similar to planning center, owned by tithely.',
        href: 'https://www.breezechms.com/',
        icon: CheckBadgeIcon,
        iconForeground: 'text-purple-700',
        iconBackground: 'bg-purple-50',
    },
    {
        title: 'Monday.com',
        description: 'Task Management Tool, work platform.',
        href: 'https://monday.com/',
        icon: UsersIcon,
        iconForeground: 'text-sky-700',
        iconBackground: 'bg-sky-50',
    },
    {
        title: 'Asana',
        description: 'Work Management, task management',
        href: 'https://asana.com/',
        icon: ClipboardDocumentListIcon,
        iconForeground: 'text-yellow-700',
        iconBackground: 'bg-yellow-50',
    },
    {
        title: 'Atlassian Products Jira - Trello',
        description: 'Jira is ideal for project management and task management, trello is a simplified card tool.',
        href: 'https://www.atlassian.com/software',
        icon: SparklesIcon,
        iconForeground: 'text-indigo-700',
        iconBackground: 'bg-indigo-50',
    },
    {
        title: 'BAND',
        description: 'Scheduling App, great for music groups, but any teams. Mobile first.',
        href: 'https://band.us/en',
        icon: DevicePhoneMobileIcon,
        iconForeground: 'text-rose-700',
        iconBackground: 'bg-rose-50',
    },
    {
        title: 'Others??',
        description: 'Share with us your own.',
        href: 'https://forms.gle/FFbYsG5zi1spQdVe8',
        icon: QuestionMarkCircleIcon,
        iconForeground: 'text-teal-700',
        iconBackground: 'bg-teal-50',
    },
    

]

const sopActions = [
    {
        title: 'Your Church and Media',
        description: 'Building an effective media ministry',
        href: 'https://drive.google.com/file/d/1_fmyhITSi7F3mbcSW7Z_W7UFbaNF2Qq3/view?usp=sharing',
        icon: DocumentIcon,
        iconForeground: 'text-teal-700',
        iconBackground: 'bg-teal-50',
    },
    {
        title: 'Church Photography Handbook',
        description: 'Example Photography Guide to teach photographers',
        href: 'https://www.dropbox.com/scl/fi/od92cvdo065uwbnselhcb/Photography-Handbook-Updated-2023.10.15-compressed.pdf?rlkey=xv8qro6notk5zdoni5lzg7gzh&dl=0',
        icon: CameraIcon,
        iconForeground: 'text-yellow-700',
        iconBackground: 'bg-yellow-50',
    },
    {
        title: 'Basic Job Description Example',
        description: 'Here is an example of a basic media tech volunteer job description',
        href: 'https://docs.google.com/document/d/1knk1VI6-8UiwoDnndLhejPP-OvnaYcNa-mnb_X4Ekz8/edit?usp=sharing',
        icon: DocumentIcon,
        iconForeground: 'text-teal-700',
        iconBackground: 'bg-teal-50',
    },
    {
        title: 'Example Church Systems Manual',
        description: 'This is an example of a Church Systems Manual for leaders and volunteers',
        href: 'https://drive.google.com/file/d/1cldZxcWMDtCUS1oQtWVwFRgM2vYwi1y4/view?usp=sharing',
        icon: DocumentIcon,
        iconForeground: 'text-purple-700',
        iconBackground: 'bg-purple-50',
    },
    {
        title: 'Example Training Class Material, Broadcasting 201',
        description: 'This is an example of a slideshow you could present when teaching on a subject to your team.',
        href: 'https://docs.google.com/presentation/d/17r5675GaJW451VVYtpMfMSOufXA2NvOT-z_R9uiJBlA/edit?usp=sharing',
        icon: ComputerDesktopIcon,
        iconForeground: 'text-sky-700',
        iconBackground: 'bg-sky-50',
    },

    // {
    //     title: 'Submit an expense',
    //     description: 'Testing',
    //     href: '#',
    //     icon: ReceiptRefundIcon,
    //     iconForeground: 'text-rose-700',
    //     iconBackground: 'bg-rose-50',
    // },
    // {
    //     title: 'Training',
    //     description: 'Testing',
    //     href: '#',
    //     icon: AcademicCapIcon,
    //     iconForeground: 'text-indigo-700',
    //     iconBackground: 'bg-indigo-50',
    // },
    {
        title: 'Others??',
        description: 'Share with us your own.',
        href: 'https://forms.gle/FFbYsG5zi1spQdVe8',
        icon: QuestionMarkCircleIcon,
        iconForeground: 'text-teal-700',
        iconBackground: 'bg-teal-50',
    },
]

const digitalEngagementPlatforms = [
    {
        title: 'Rock ChMS',
        description: 'This ChCMS is very focused on engagement with guests.',
        href: 'https://www.rockrms.com/rock-hosting',
        icon: GlobeAsiaAustraliaIcon,
        iconForeground: 'text-teal-700',
        iconBackground: 'bg-teal-50',
    },
    {
        title: 'Planning Center',
        description: 'Planning Center is a set of software tools to help you organize information, coordinate events, communicate with your team, and connect with your congregation.',
        href: 'https://www.planningcenter.com/',
        icon: FlagIcon,
        iconForeground: 'text-purple-700',
        iconBackground: 'bg-purple-50',
    },
    {
        title: 'Breeze ChMS',
        description: 'Church management software, handles featuring groups, service planning and giving tools. Similar to planning center, owned by tithely.',
        href: 'https://www.breezechms.com/',
        icon: CheckBadgeIcon,
        iconForeground: 'text-yellow-700',
        iconBackground: 'bg-yellow-50',
    },
    {
        title: 'Mailchimp',
        description: 'Email Marketing, SMS marketing.',
        href: 'https://mailchimp.com/',
        icon: EnvelopeIcon,
        iconForeground: 'text-rose-700',
        iconBackground: 'bg-rose-50',
    },
    {
        title: 'Others??',
        description: 'Share with us your own.',
        href: 'https://forms.gle/FFbYsG5zi1spQdVe8',
        icon: QuestionMarkCircleIcon,
        iconForeground: 'text-teal-700',
        iconBackground: 'bg-teal-50',
    },
]



export default function Page() {
    return (
        <div>
            <h1>Tips and Tricks</h1>
            <ActionCards actions={tipsTricks}></ActionCards>

            <h1 className='mt-12'>Productivity Tools</h1>
            <ActionCards actions={schedulingActions} />

            <h1 className='mt-12'>Standard Operating Procedures Examples</h1>
            <ActionCards actions={sopActions} />

            <h1 className='mt-12'>Digital Engagement Platforms</h1>
            <ActionCards actions={digitalEngagementPlatforms} />


            <h1 className='mt-12'>Have Other Resources to Share?</h1>
            <p>If you are interested in receiving email updates of other resources to share from us, or contributing other resources to share, <Link href="https://forms.gle/FFbYsG5zi1spQdVe8" target="_blank">signup here.</Link></p>
        </div>
      )
}
