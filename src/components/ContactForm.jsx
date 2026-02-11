export default function ContactForm() {
  return (
    <>
      <form className={`flex flex-col p-2`}>
        <div>
          <label for="contactSubject"></label>
          <input type="text" id="contactSubject" />
        </div>

        <div>
          <label for="contactEmail"></label>
          <input type="email" name="" id="contactEmail" />
        </div>

        <div>
          <label for="contactForWho"></label>
          <select id="contactForWho" name="subject" required>
            <option value="" disabled selected>
              Please select a subject
            </option>

            <option value="general">General Enquiry</option>
            <option value="visit-accessibility">Visit & Accessibility</option>
            <option value="exhibitions-events">Exhibitions & Events</option>
            <option value="artwork-enquiry">Artwork Enquiry</option>
            <option value="press-media">Press & Media</option>
            <option value="schools-education">Schools & Education</option>
            <option value="artist-submissions">Artist Submissions</option>
            <option value="venue-hire-studio-rental">
              Venue Hire & Studio Rental
            </option>
            <option value="partnerships-sponsorship">
              Partnerships & Sponsorship
            </option>
            <option value="technical-support">Technical Support</option>
          </select>
        </div>

        <div>
          <label for=""></label>
          <textarea name="" id=""></textarea>
        </div>

        <div>
          <input type="submit" value="" />
        </div>
      </form>
    </>
  );
}
