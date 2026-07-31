import {
  link,
  list,
  paragraph,
  subheading,
} from "@/lib/legal-content";
import type { LegalPageData } from "@/types/legal";

export const termsPolicy: LegalPageData = {
  route: "/terms/",
  title: "Terms & Conditions",
  description: "The rules and conditions governing access to and use of the UniSouk website and its content.",
  navigation: [
    { label: "Acceptance", href: "#acceptance" },
    { label: "Cookies", href: "#cookies" },
    { label: "License", href: "#license" },
    { label: "Linking", href: "#linking" },
    { label: "Content liability", href: "#content-liability" },
    { label: "Rights and removal", href: "#rights" },
    { label: "Disclaimer", href: "#disclaimer" },
  ],
  intro: "These terms and conditions outline the rules and regulations for using NexaNode Technologies Pvt. Ltd.’s website, located at www.unisouk.com.",
  sections: [
    {
      id: "acceptance",
      title: "Acceptance of these terms",
      blocks: [
        paragraph("By accessing this website, we assume you accept these terms and conditions. Do not continue to use www.unisouk.com if you do not agree to all the terms and conditions stated on this page."),
        paragraph("The terminology in these Terms and Conditions, Privacy Statement, Disclaimer Notice and related Agreements applies as follows: “Client”, “You” and “Your” refers to the person accessing this website and complying with the Company’s terms. “The Company”, “Ourselves”, “We”, “Our” and “Us” refers to NexaNode Technologies Pvt. Ltd. “Party”, “Parties” or “Us” refers to both the Client and ourselves."),
        paragraph("All terms refer to the offer, acceptance and consideration of payment necessary to undertake our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of the Company’s stated services. Words in singular, plural, capitalization and gendered or neutral forms are interchangeable and refer to the same."),
      ],
    },
    {
      id: "cookies",
      title: "Cookies",
      blocks: [
        paragraph("We employ the use of cookies. By accessing www.unisouk.com, you agree to use cookies in accordance with NexaNode Technologies Pvt. Ltd.’s Privacy Policy."),
        paragraph("Most interactive websites use cookies to retrieve user details for each visit. Our website uses cookies to enable the functionality of certain areas and make visits easier. Some affiliate or advertising partners may also use cookies."),
      ],
    },
    {
      id: "license",
      title: "License and user content",
      blocks: [
        paragraph("Unless otherwise stated, NexaNode Technologies Pvt. Ltd. and/or its licensors own the intellectual property rights for all material on www.unisouk.com. All intellectual property rights are reserved. You may access this material for personal use subject to the restrictions in these terms."),
        paragraph("You must not:"),
        list(["Republish material from www.unisouk.com"], ["Sell, rent or sub-license material from www.unisouk.com"], ["Reproduce, duplicate or copy material from www.unisouk.com"], ["Redistribute content from www.unisouk.com"]),
        subheading("Comments and contributed content"),
        paragraph("Parts of the website may let users post and exchange opinions and information. NexaNode Technologies Pvt. Ltd. does not filter, edit, publish or review Comments before they appear. Comments reflect the views of the person posting them and not necessarily the Company, its agents or affiliates."),
        paragraph("To the extent permitted by applicable law, NexaNode Technologies Pvt. Ltd. is not liable for Comments or for liability, damages or expenses caused by their use, posting or appearance. The Company reserves the right to monitor and remove Comments considered inappropriate, offensive or in breach of these Terms and Conditions."),
        paragraph("You warrant that you are entitled to post Comments and have the necessary licenses and consents; that Comments do not infringe third-party intellectual property; that they contain no defamatory, offensive, indecent or unlawful material invading privacy; and that they will not be used to solicit business or promote unlawful activity."),
        paragraph("You grant NexaNode Technologies Pvt. Ltd. a non-exclusive license to use, reproduce and edit your Comments, and to authorize others to do so in any form, format or media."),
      ],
    },
    {
      id: "linking",
      title: "Hyperlinking to our content",
      blocks: [
        paragraph("The following organizations may link to our Website without prior written approval:"),
        list(["Government agencies"], ["Search engines"], ["News organizations"], ["Online directory distributors linking in the same manner as to other listed businesses"], ["System-wide Accredited Businesses, excluding soliciting non-profits, charity shopping malls and charity fundraising groups"]),
        paragraph("These organizations may link to our home page, publications or other Website information so long as the link is not deceptive, does not falsely imply sponsorship, endorsement or approval, and fits within the context of the linking party’s site."),
        paragraph("We may consider requests from commonly known consumer or business information sources, dot-com community sites, associations representing charities, online directories, internet portals, accounting, law and consulting firms, educational institutions and trade associations."),
        paragraph("We approve such requests when the link would not reflect unfavorably on us or our accredited businesses, the organization has no negative record with us, the visibility benefit compensates for the absence of NexaNode Technologies Pvt. Ltd., and the link appears within general resource information."),
        paragraph("Organizations seeking approval should contact NexaNode Technologies Pvt. Ltd. with their name, organization, contact information, site URL, source URLs and the UniSouk URLs they wish to link to. Please allow two to three weeks for a response."),
        paragraph("Approved organizations may link using our corporate name, the linked URL, or another description that makes sense in context. No use of our logo or artwork is permitted without a trademark license agreement."),
        subheading("iFrames"),
        paragraph("Without prior written permission, you may not create frames around our webpages that alter the visual presentation or appearance of the Website."),
      ],
    },
    {
      id: "content-liability",
      title: "Content liability and privacy",
      blocks: [
        paragraph("We are not responsible for content appearing on your Website. You agree to protect and defend us against claims arising from your Website. No link should appear on any Website if it may be interpreted as libelous, obscene or criminal, infringes third-party rights, or advocates such infringement."),
        subheading("Your privacy"),
        paragraph("Please read our ", link("Privacy Policy", "/privacy/"), "."),
      ],
    },
    {
      id: "rights",
      title: "Reservation of rights and link removal",
      blocks: [
        paragraph("We reserve the right to request removal of all links or a particular link to our Website. You agree to remove links immediately upon request. We also reserve the right to amend these Terms and Conditions and the linking policy at any time. By continuing to link to our Website, you agree to be bound by these linking terms."),
        paragraph("If you find a link on our Website offensive for any reason, you may contact us at any time. We will consider requests to remove links but are not obligated to do so or to respond directly."),
        paragraph("We do not ensure that information on this website is correct, warrant its completeness or accuracy, promise continuous availability, or promise that material will remain up to date."),
      ],
    },
    {
      id: "disclaimer",
      title: "Disclaimer",
      blocks: [
        paragraph("To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our Website and its use. Nothing in this disclaimer will:"),
        list(["Limit or exclude liability for death or personal injury"], ["Limit or exclude liability for fraud or fraudulent misrepresentation"], ["Limit liabilities in a way not permitted under applicable law"], ["Exclude liabilities that may not be excluded under applicable law"]),
        paragraph("The limitations and prohibitions of liability in this section and elsewhere in this disclaimer are subject to the preceding paragraph and govern liabilities arising under the disclaimer, including in contract, tort and breach of statutory duty."),
        paragraph("As long as the Website and its information and services are provided free of charge, we will not be liable for loss or damage of any nature."),
      ],
    },
  ],
};
