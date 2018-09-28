package cm.app.letsgo.repository.search;

import cm.app.letsgo.domain.Partner;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Partner entity.
 */
public interface PartnerSearchRepository extends ElasticsearchRepository<Partner, Long> {
}
